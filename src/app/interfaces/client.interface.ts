export interface ClientInterface {
    id: number
    first_name: string
    last_name: string
    is_active: boolean
    type: ClientTypeEnum
    start_date: Date
    amount: number
}

export enum ClientTypeEnum {
    BASIC = 'Basic',
    TRADITIONAL = 'Traditional',
    PREMIUM = 'Premium',
}

export enum ClientStatusEnum {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
}
