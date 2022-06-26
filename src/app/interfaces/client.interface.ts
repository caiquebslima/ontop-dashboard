export interface ClientInterface {
    id: number
    first_name: string
    last_name: string
    status: ClientStatusEnum
    type: ClientTypeEnum
    start_date: Date
    amount: number
    picture: string
}

export enum ClientTypeEnum {
    BASIC = 'Basic',
    TRADITIONAL = 'Traditional',
    PREMIUM = 'Premium',
}

export enum ClientStatusEnum {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    PENDING = 'Pending',
}
