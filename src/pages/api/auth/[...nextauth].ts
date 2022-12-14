import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  //   session: {
  //     strategy: 'jwt',
  // },
  // Include user.id on session
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      // console.log(token, "our jwt token");
      return token;
    },
    session({ session, user }) {
      // if (session.user) {
      //   session.user.id = user.id;
      // }
      // console.log(user, session, "our user and session")
      return { ...session, ...user };
    },
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(_credentials, _req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        return {
          id: 1,
          name: 'J Smith',
          email: 'jsmith@example.com',
          image: 'https://i.pravatar.cc/150?u=jsmith@example.com',
        };
        // const res = await fetch("/your/endpoint", {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" }
        // })
        // const user = await res.json()

        // // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user
        // }
        // // Return null if user data could not be retrieved
        // return null
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
