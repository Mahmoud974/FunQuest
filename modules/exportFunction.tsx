export const generateStars = (rating: number): string => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  return "★".repeat(fullStars) + (halfStars ? "☆" : "");
};
