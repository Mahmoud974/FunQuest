import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

interface Props {
  setAuth: (isAuthenticated: boolean) => void;
}

export default function AuthUser({ setAuth }: Props) {
  const { data: session, status } = useSession<any>();

  const onLogout = (): void => {
    setAuth(false);
    signOut();
  };

  if (session) {
    return (
      <Link href="/">
        <p>Account</p>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={
              (session && session?.user.image) ||
              'https://github.com/shadcn.png'
            }
          />
          <AvatarFallback>{session && session.user?.name}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={onLogout} className="cursor-pointer">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
