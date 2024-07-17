import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/db"

export const authOptions = {
    // Configure one or more authentication providers
    adapter: MongoDBAdapter(clientPromise),
    providers: [ 
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
      // ...add more providers here
    ],
  }