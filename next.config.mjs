/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com', // Domaine d'Unsplash pour les images
      'unsplash.com', // Si vous voulez inclure aussi unsplash.com
      'zhqpheunskiuodymniyz.supabase.co', // Domaine de Supabase
    ],
  },
};

export default nextConfig;
