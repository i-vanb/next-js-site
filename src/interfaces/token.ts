export interface TokenPair {
    accessToken: string,
    refreshToken: string
}

export interface TokenPayload {
    login: string,
}

export interface EmailToken {
    emailToken: string,
    expireAt: number
}