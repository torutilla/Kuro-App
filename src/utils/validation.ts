export function validatePassword(v: string) {
    for (const rule of passwordRules) {
        if (rule.isInvalid(v)) {
            return rule.message;
        }
    }
    return null;
}

export const isTooShort = (v: string) => v.length < 8;
export const missingUppercase = (v: string) => !/[A-Z]/.test(v);
export const missingNumber = (v: string) => !/\d/.test(v);

export type PasswordRule = {
    id: string;
    message: string;
    isInvalid: (v: string) => boolean;
};

export const passwordRules: PasswordRule[] = [
    {
        id: "length",
        message: "At least 8 characters",
        isInvalid: isTooShort,
    },
    {
        id: "uppercase",
        message: "One uppercase letter",
        isInvalid: missingUppercase,
    },
    {
        id: "number",
        message: "One number",
        isInvalid: missingNumber,
    },
];

export function isStringEmpty(v: string) {
    if (v === "") return "Field cannot be empty.";
    return null;
}

export function isValidEmail(v: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(v) ? "Invalid email" : null;
}