import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("soil_monitor");

    const reading = {
      deviceId: body.deviceId,
      moistureRaw: body.moistureRaw,
      moisturePct: body.moisturePct,
      createdAt: new Date(),
    };

    await db.collection("readings").insertOne(reading);

    return NextResponse.json({
      ok: true,
      saved: reading,
    });
  } catch (error) {
    console.error("POST API ERROR:", error);
    return NextResponse.json(
      { error: "Failed to save reading" },
      { status: 500 }
    );
  }
}