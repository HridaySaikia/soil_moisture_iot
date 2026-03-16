export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import clientPromise from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const deviceId = searchParams.get("deviceId");
    const limit = Number(searchParams.get("limit") ?? "120");

    if (!deviceId) {
      return NextResponse.json({ history: [] });
    }

    const client = await clientPromise;
    const db = client.db("soil_monitor");

    const history = await db
      .collection("readings")
      .find({ userId, deviceId })
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();

    return NextResponse.json(
      { history: history.reverse() },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        },
      }
    );
  } catch (error: any) {
    console.error("HISTORY API ERROR FULL:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch history",
        details: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}