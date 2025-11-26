import "better-auth"            // extiende el User real
import "better-auth/client"     // extiende el SessionUser real

declare module "better-auth" {
  interface User {
    role: "user" | "admin"
  }
}

declare module "better-auth/client" {
  interface SessionUser {
    role: "user" | "admin"
  }
}
