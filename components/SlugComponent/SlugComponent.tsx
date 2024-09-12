// src/components/SlugComponent.tsx
'use client'; // Assurez-vous que ce fichier est un composant client

import { useRouter } from 'next/navigation';
import React from 'react';

const SlugComponent: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null; // Assurez-vous que `slug` est défini

  return (
    <div className="slug-info">
      <p>Current slug: {slug}</p>
    </div>
  );
};

export default SlugComponent;
