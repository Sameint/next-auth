import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import CredentialsProvider from "next-auth/providers/credentials";



export const authOption: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Next Auth",
            credentials: {
                email: {
                    name: "Email",
                    type: "email",
                    placeholder: "Write Your Email"
                },
                password: {
                    name: "Password",
                    type: "password",
                    Placeholder: "Type Your Password"
                }
            },
async authorize(credentials, req) {
    const user = { id: "1", name: "J Smith", email:credentials?.email}

    if (user) {
      // Any object returned will be saved in `user` property of the JWT
      return user
    } else {
      // If you return null then an error will be displayed advising the user to check their details.
      return null

      // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
    }
            },
        })

    ]
}