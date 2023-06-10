export interface LoginSuccessPayload{
    email:string,
}

export interface loginFailedPayload{
    error: string
}

export interface SignUpFailedPayload
{
    error: string
}

export interface SignUpSuccessPayload{
    email:string,
    userName:string
}