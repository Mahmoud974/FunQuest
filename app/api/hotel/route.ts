import { NextResponse } from "next/server";
import prisma from "../../../lib/connect";
import { db } from "../db";

export const GET = async () => {
  try {
    const hotels = await prisma.hotel.findMany();
    return NextResponse.json(hotels, { status: 200 });
  } catch (err) {
    console.error("Error fetching from database:", err);
    return NextResponse.json(db, { status: 200 });
  }
};
