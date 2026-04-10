import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { submitVisitorInterest } from "@/lib/services/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await submitVisitorInterest(body);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: error.issues[0]?.message ?? "Invalid submission." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to submit the form." },
      { status: 500 },
    );
  }
}

