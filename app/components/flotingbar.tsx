"use client";

import React from 'react';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export function FloatingNavDemo() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'About',
      link: '/about',
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <ClerkProvider>
      <div className="relative w-full bg-black">
        <FloatingNav navItems={navItems} />
        <SignedOut>
          <CustomSignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </ClerkProvider>
  );
}

function CustomSignInButton() {
  const handleSignIn = () => {
    const signInUrl = `https://wanted-ewe-27.accounts.dev/sign-in?redirect_url=http://localhost:4321/`;
    window.location.href = signInUrl;
  };

  return (
    <button className="flex items-center" onClick={handleSignIn}>
      <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
      <span className="ml-2 text-neutral-500 dark:text-white">Login</span>
    </button>
  );
}
