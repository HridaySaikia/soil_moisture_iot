export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { deviceId, deviceToken, moistureRaw, moisturePct } = body;

    if (
      !deviceId ||
      !deviceToken ||
      moistureRaw === undefined ||
      moisturePct === undefined
    ) {
      return NextResponse.json(
        { error: "deviceId, deviceToken, moistureRaw, moisturePct are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("soil_monitor");

    const device = await db.collection("devices").findOne({
      deviceId,
      deviceToken,
    });

    if (!device) {
      return NextResponse.json(
        { error: "Invalid device credentials" },
        { status: 401 }
      );
    }

    const reading = {
      userId: device.userId,
      deviceId,
      moistureRaw: Number(moistureRaw),
      moisturePct: Number(moisturePct),
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