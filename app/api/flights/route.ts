import { NextResponse } from "next/server";
import { flights } from "../dbFlights";
import prisma from "../../../lib/connect";

export const GET = async () => {
  try {
    const flightsDb = await prisma.flight.findMany();
    return NextResponse.json(flightsDb, { status: 200 });
  } catch (err) {
    console.error("Error fetching from database:", err);
    return NextResponse.json(flights, { status: 200 });
  }
};
