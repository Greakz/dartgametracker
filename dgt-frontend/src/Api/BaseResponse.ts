export interface BaseResponse {}

export interface ResponseWrapper<T> {
    message: string
    status: number
    data: T
}