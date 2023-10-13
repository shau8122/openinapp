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
        // const sessionUser = await User.findOne({ email: session.user.email });
        // if (sessionUser) {
        //   session.user.id = sessionUser._id.toString();
        // }
        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return Promise.reject(new Error("Session callback error"));
      }
    },
    async signIn({ profile }) {
      try {
        // await connectToDB();
        // // Check if a user already exists
        // const userExists = await User.findOne({ email: profile.email });
        // console.log(userExists);
        // // If not, create a new user
        // if (!userExists) {
        //   await User.create({
        //     email: profile.email,
        //     username: profile.name.replace(" ", "").toLowerCase(),
        //     image: profile.picture
        //   });
        // }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
  },
});
export { handler as GET, handler as POST };
