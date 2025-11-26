import { betterAuth, url } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { sendPasswordResetEmail } from './email';

const prisma = new PrismaClient();

const auth = betterAuth({
    database: prismaAdapter(prisma, { provider: "postgresql" }),

    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,

        sendResetPassword: async ({ user, url }) => { 
            await sendPasswordResetEmail(user.email, url)
        },

        minPasswordLength: 6,
        maxPasswordLength: 20,
    },

    session: {
        expiresIn: 60 * 60 * 24 * 7,
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60,
        }
    },

    user: {
        additionalFields: {
            role: {
                type: "string",
                default: "user",
                input: false,
                allowedValues: ["user", "admin"],
            },
        },
    },
})


export default auth