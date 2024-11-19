const EMAIL_REGEX = /^(?=.*@)(?=.*\.).*$/;
const PASSWORD_REGEX = /^.{8,}$/;

export const isEmailValid = (str: string) => EMAIL_REGEX.test(str);
export const isPasswordValid = (str: string) => PASSWORD_REGEX.test(str);
