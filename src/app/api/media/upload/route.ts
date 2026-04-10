import { NextResponse } from "next/server";

import { uploadMediaAsset } from "@/lib/services/media";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const result = await uploadMediaAsset(formData);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to upload media." },
      { status: 500 },
    );
  }
}

