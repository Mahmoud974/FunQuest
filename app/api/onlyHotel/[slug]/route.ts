import { NextResponse } from "next/server";
import prisma from "../../../../lib/connect";

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;

  // Remplacer les tirets par des espaces
  const hotelName = slug.replace(/-/g, " ");

  try {
    const hotel = await prisma.hotel.findFirst({
      where: {
        name: {
          contains: hotelName,
        },
      },
      include: {
        rooms: true,
        reviews: true,
      },
    });

    if (!hotel) {
      return NextResponse.json({ error: "Hotel not found!" }, { status: 404 });
    }

    return NextResponse.json(hotel, { status: 200 });
  } catch (error) {
    console.error("Error fetching hotel:", error); // Pour aider à déboguer les erreurs
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
};
