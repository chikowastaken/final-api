import { BaseEntity } from '../shared/base-entity';
export declare class Purchase extends BaseEntity {
    totalPrice: number;
    totalItems: number;
    user_id: string;
}
