import NextAuth, { getServerSession } from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
// import LineProvider from "next-auth/providers/line";
import { PrismaClient } from '@prisma/client';
// import { config } from 'dotenv';
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();
const secret = process.env.NEXTAUTH_SECRET
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',

        }),
    ],
    callbacks: {

        async jwt({ token, user, account }: { token: any, user: any, account: any }) {
            if (account) {
                token.id_token = account.id_token;

                // Check if email exists in the Member model
                const member = await prisma.user.findUnique({
                    where: {
                        email: user.email,
                    },
                });

                // If member doesn't exist, insert a new member
                if (!member) {
                    await prisma.user.create({
                        data: {
                            name: user.name,
                            email: user.email,
                            emailVerified: null,
                            image: user.image,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    });
                }
            }
            return token;
        },
        async session({ session, token }: { session: any, token: any }) {
            session.id_token = token.id_token;
            return session;
        },
    },
};

export default NextAuth(authOptions)