import { BaseEntity } from '../shared/base-entity';
export declare enum UserRole_Enum {
    CUSTOMER = "customer",
    ADMIN = "admin"
}
export declare class Users extends BaseEntity {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    verified: boolean;
    role: UserRole_Enum;
    password: string;
    refresh_token: string;
}
