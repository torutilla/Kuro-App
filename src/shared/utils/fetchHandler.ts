import { API_BASE_URL } from "../config/api.ts";

async function fetchHandler<T>(
    path: string,
    reqInit: RequestInit = {},
    retried = false
): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...reqInit,
        credentials: "include",
    });

    if (response.status === 401 && !retried) {
        const refreshRes = await fetch(`${API_BASE_URL}/auth/refresh`, {
            method: "POST",
            credentials: "include",
        });

        if (refreshRes.ok) {
            return fetchHandler<T>(path, reqInit, true);
        }
    }

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
