import NextAuth, { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/email'

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { Client } from 'postmark'
import { db } from '@/lib/db'

// const postmarkClient = new Client(process.env.POSTMARK_API_TOKEN)

// const POSTMARK_SIGN_IN_TEMPLATE = 29559329
// const POSTMARK_ACTIVATION_TEMPLATE = 29559329

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = user.id
      return session
    },
  },
}

export default NextAuth(authOptions)
