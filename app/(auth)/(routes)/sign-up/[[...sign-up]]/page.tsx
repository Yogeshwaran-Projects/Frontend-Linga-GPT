// app/(auth)/(routes)/sign-up/[[...sign-up]]/page.tsx

'use client';

import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp routing="path" path="/sign-up" />
    </div>
  );
};

export default SignUpPage;
