import { Clerk } from '@clerk/clerk-sdk-node';

const clerk = new Clerk(process.env.CLERK_API_KEY);

export async function getUserFromClerk(userId) {
  try {
    const user = await clerk.users.getUser(userId);
    return user;
  } catch (error) {
    console.error('Error fetching user from Clerk:', error);
    throw error;
  }
}
