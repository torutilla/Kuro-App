function validatePassword(v: string){
    if (v.length < 8) return "At least 8 characters";
    if (!/[A-Z]/.test(v)) return "One uppercase letter required";
    if (!/\d/.test(v)) return "One number required";
    return null;
}
export default validatePassword;