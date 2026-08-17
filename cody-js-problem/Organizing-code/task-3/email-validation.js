export function validateEmail(email) {
    return email.includes('@') && email.includes('.');
}

export function validatePassword(password) {
    return password.length >= 8;
}