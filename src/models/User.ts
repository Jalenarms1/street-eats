export interface User {
    id: string,
    email: string,
    password?: string
    
}

export interface AuthUserResponse {
    $id: string,
    token: string
}
