import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const nodeModulesDir = path.join(rootDir, "node_modules");
const isWslShell = Boolean(process.env.WSL_DISTRO_NAME || process.env.WSL_INTEROP);
const LIGHTNINGCSS_PACKAGES = [
  "lightningcss-android-arm64",
  "lightningcss-darwin-arm64",
  "lightningcss-darwin-x64",
  "lightningcss-freebsd-x64",
  "lightningcss-linux-arm-gnueabihf",
  "lightningcss-linux-arm64-gnu",
  "lightningcss-linux-arm64-musl",
  "lightningcss-linux-x64-gnu",
  "lightningcss-linux-x64-musl",
  "lightningcss-win32-arm64-msvc",
  "lightningcss-win32-x64-msvc",
];
const SUPPORTED_PLATFORMS = new Set(["android", "darwin", "freebsd", "linux", "win32"]);

if (isWslShell && process.platform === "win32") {
  fail([
    "This install is using Windows Node.js from inside WSL.",
    "",
    "Native packages in this repo are platform-specific. Installing from Windows produces",
    "Windows binaries in node_modules, but Next.js inside WSL expects Linux binaries.",
    "",
    `Current Node executable: ${process.execPath}`,
    "",
    "Fix:",
    "1. Install or enable Node.js inside WSL.",
    "2. Confirm `which node` and `which npm` point to Linux paths, not `/mnt/.../Program Files/nodejs`.",
    "3. Remove `node_modules` and `.next`.",
    "4. Run `npm install` again from WSL.",
  ]);
}

const lightningCssDir = path.join(nodeModulesDir, "lightningcss");

if (existsSync(lightningCssDir)) {
  const expectedPackageName = getLightningCssPackageName();

  if (expectedPackageName) {
    const expectedPackageDir = path.join(nodeModulesDir, expectedPackageName);

    if (!existsSync(expectedPackageDir)) {
      const installedVariants = LIGHTNINGCSS_PACKAGES.filter((packageName) =>
        existsSync(path.join(nodeModulesDir, packageName)),
      );

      fail([
        `Missing ${expectedPackageName} in node_modules.`,
        "",
        `Detected runtime: ${process.platform}/${process.arch}`,
        installedVariants.length
          ? `Installed lightningcss native package(s): ${installedVariants.join(", ")}`
          : "No lightningcss native package was found.",
        "",
        "This usually means dependencies were installed from a different OS than the one",
        "running Next.js. Reinstall dependencies with the same Node.js runtime you use",
        "to run the app.",
        "",
        "Recommended cleanup:",
        "1. Remove `node_modules` and `.next`.",
        "2. Verify `which node` and `which npm` point to the current OS runtime.",
        "3. Run `npm install` again.",
      ]);
    }
  }
}

function getLightningCssPackageName() {
  if (!SUPPORTED_PLATFORMS.has(process.platform)) {
    return null;
  }

  const parts = [process.platform, process.arch];

  if (process.platform === "linux") {
    if (process.arch === "arm") {
      parts.push("gnueabihf");
    } else {
      const hasGlibc = Boolean(process.report?.getReport?.().header?.glibcVersionRuntime);
      parts.push(hasGlibc ? "gnu" : "musl");
    }
  } else if (process.platform === "win32") {
    parts.push("msvc");
  }

  return `lightningcss-${parts.join("-")}`;
}

function fail(lines) {
  console.error(`\n[runtime-check]\n${lines.join("\n")}\n`);
  process.exit(1);
}
