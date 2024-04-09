import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import DiscordProvider from "next-auth/providers/discord";


const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    // providers: [
    //     DiscordProvider({
    //       clientId: process.env.DISCORD_CLIENT_ID,
    //       clientSecret: process.env.DISCORD_CLIENT_SECRET
    //     })
    //   ]
};

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}
