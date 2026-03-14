import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const deviceId = searchParams.get("deviceId");

    if (!deviceId) {
      return NextResponse.json({ latest: null }, { status: 200 });
    }

    const client = await clientPromise;
    const db = client.db("soil_monitor");

    const latest = await db
      .collection("readings")
      .find({ deviceId })
      .sort({ createdAt: -1 })
      .limit(1)
      .toArray();

    return NextResponse.json({
      latest: latest[0] || null,
    });
  } catch (error) {
    console.error("LATEST API ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch latest reading" },
      { status: 500 }
    );
  }
}