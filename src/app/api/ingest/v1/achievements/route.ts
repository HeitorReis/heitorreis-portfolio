import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { ingestAchievement } from "@/lib/services/automation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await ingestAchievement(request, body);
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: error.issues[0]?.message ?? "Invalid ingest payload." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to ingest achievement." },
      { status: 500 },
    );
  }
}

