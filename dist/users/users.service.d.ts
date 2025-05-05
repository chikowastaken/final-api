import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { UpdateUserDto } from './dtos/update-user.dto';
type CreateUserArgs = {
    first_name: string;
    last_name: string;
    email: string;
    password?: string;
    phone_number: string;
};
type UpdateRefreshTokenArgs = {
    id: string;
    refresh_token?: string;
};
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    findOne(criteria: Partial<Users>): Promise<Users>;
    update(userId: string, body: UpdateUserDto): Promise<{
        first_name: string;
        last_name: string;
        phone_number: string;
        email: string;
        verified: boolean;
        role: import("./users.entity").UserRole_Enum;
        password: string;
        refresh_token: string;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    create({ email, first_name, last_name, password, phone_number, }: CreateUserArgs): Promise<Users>;
    updateRefreshToken(data: UpdateRefreshTokenArgs): Promise<Users>;
}
export {};
