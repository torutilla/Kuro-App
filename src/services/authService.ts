import type { User } from "../types/user.ts";
import fetchHandler from "../utils/fetchHandler.ts";

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

    signup() {

    }
}

export default AuthService;