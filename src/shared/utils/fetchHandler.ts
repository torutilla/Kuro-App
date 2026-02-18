import { API_BASE_URL } from "../config/api.ts";

async function fetchHandler<T>(path: string, reqInit?: RequestInit): Promise<T> {
    const response = await fetch(
        `${API_BASE_URL}${path}`, {
        credentials: "include",
        ...reqInit,
    });
    if (!response.ok) {
        let message = "Something went wrong";
        try {
            const data = await response.json();
            message = data.message ?? message;
        } catch {
            message = await response.text();
        }
        throw new Error(message);
    }
    return response.json() as Promise<T>;
}

export default fetchHandler;