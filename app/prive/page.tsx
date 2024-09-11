'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function PrivatePg() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace('/');
    }
  }, [session, router]); // Le tableau de dépendances assure que useEffect s'exécute lorsque session change

  if (!session) {
    <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Private Page</h1>
      <p>Welcome, {session?.user.name}!</p>
      <button onClick={() => router.replace('/logout')}>Logout</button>
    </div>
  );
}
