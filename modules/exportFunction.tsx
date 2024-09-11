export const generateStars = (rating: number): string => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  return '★'.repeat(fullStars) + (halfStars ? '☆' : '');
};

export const filterTheSearch = (title: string, db: any) => {
  if (!db) {
    return [];
  }

  const filteredData = db?.filter((item: any) =>
    item?.title.toLowerCase().includes(title.toLowerCase())
  );

  return filteredData;
};
