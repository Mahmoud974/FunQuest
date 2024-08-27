import { NextResponse } from "next/server";
import prisma from "../../../lib/connect";
import { activities } from "../dbActivité";

export const GET = async () => {
  try {
    const activitiesDb = await prisma.activity.findMany();
    return NextResponse.json(activitiesDb, { status: 200 });
  } catch (err) {
    console.error("Error fetching from database:", err);
    return NextResponse.json(activities, { status: 200 });
  }
};
