export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import clientPromise from "@/lib/db";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { deviceId } = body;

    if (!deviceId) {
      return NextResponse.json({ error: "deviceId required" }, { status: 400 });
    }

    const deviceToken = crypto.randomBytes(16).toString("hex");

    const client = await clientPromise;
    const db = client.db("soil_monitor");

    await db.collection("devices").insertOne({
      userId,
      deviceId,
      deviceToken,
      createdAt: new Date(),
    });

    return NextResponse.json({
      message: "Device registered",
      deviceId,
      deviceToken,
    });
  } catch (error) {
    console.error("DEVICE REGISTER ERROR:", error);
    return NextResponse.json({ error: "Failed to register device" }, { status: 500 });
  }
}