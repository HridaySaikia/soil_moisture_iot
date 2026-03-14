import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("soil_monitor");

    const collections = await db.listCollections().toArray();

    return NextResponse.json({
      ok: true,
      collections: collections.map((c) => c.name),
    });
  } catch (error: any) {
    console.error("TEST DB ERROR:", error);
    return NextResponse.json(
      {
        ok: false,
        error: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}