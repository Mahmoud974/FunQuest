// http://localhost:3000/api/unsplash
import { NextResponse } from 'next/server';
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {
  const { searchParams } = new URL(req.url as string);
  const query = searchParams.get('query') || 'hotel room';
  const perPage = 30;
  const totalImages = 100;
  const totalPages = Math.ceil(totalImages / perPage);

  try {
    const fetchPromises = [];
    for (let page = 1; page <= totalPages; page++) {
      fetchPromises.push(
        fetch(
          `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(
            query
          )}&per_page=${perPage}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
        ).then((res) => res.json())
      );
    }

    const results = await Promise.all(fetchPromises);
    const images = results
      .flatMap((data) => data.results)
      .slice(0, totalImages);

    return NextResponse.json(images, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
