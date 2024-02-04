import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
       
        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return Promise.reject(new Error("Session callback error"));
      }
    },
    
  },
});
export { handler as GET, handler as POST };
