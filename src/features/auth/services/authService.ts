import type { RegistrationInput } from "@shared/types/input.ts";
import type { User } from "@shared/types/user.ts";
import fetchHandler from "@shared/utils/fetchHandler.ts";

const AuthService = {
    login(email: string, password: string): Promise<User> {
        return fetchHandler("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
    },

    signup(input: RegistrationInput): Promise<User> {
        return fetchHandler("/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: input.name,
                email: input.email,
                password: input.password,
            })
        })
    }
}

export default AuthService;