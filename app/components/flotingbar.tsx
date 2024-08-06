import React from 'react';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

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
    {
      name: 'Get Started',
      link: '/getai',
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full bg-black">
      <FloatingNav navItems={navItems} />
      <SignedOut>
        <CustomSignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

function CustomSignInButton() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/sign-in'); // Redirect to your sign-in page
  };

  return (
    <button className="flex items-center" onClick={handleSignIn}>
      <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
      <span className="ml-2 text-neutral-500 dark:text-white">Login</span>
    </button>
  );
}
