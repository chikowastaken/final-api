import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    currentUser(req: any): Promise<import("./users.entity").Users>;
    update(body: UpdateUserDto, req: any): Promise<{
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
}
