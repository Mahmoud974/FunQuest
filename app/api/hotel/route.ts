import { NextResponse } from "next/server";
import prisma from "../../../lib/connect";
import { db } from "../db";
import { getAuthSession } from "@/lib/auth-options";

export const GET = async () => {
  try {
    // const session = await getAuthSession();
    // if (!session || !session.user) {
    //   return NextResponse({ message: "Not Authenticated" }, { status: 403 });
    // }

    const hotels = await prisma.hotel.findMany();
    return NextResponse.json(hotels, { status: 200 });
  } catch (err) {
    console.error("Error fetching from database:", err);
    return NextResponse.json(db, { status: 200 });
  }
};
