import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import prisma from "./prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),

    // configuración para autenticación por email
    email: {
        enabled: true,
        requireEmailVerification: false,
        minPasswordLength: 6,
        maxPasswordLength: 20,
    },

    // configuración para la sesión
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60, // 5 minutes
        }
    },

});