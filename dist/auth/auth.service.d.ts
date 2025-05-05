import { JwtService } from '@nestjs/jwt';
import { Users } from '../users/users.entity';
import { UsersService } from '../users/users.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateTokensDto } from './dto/update-tokens.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    hashPassword(password: string): Promise<string>;
    comparePassword(inputPassword: string, userPassword: string): Promise<boolean>;
    validateUser(email: string, password: string): Promise<any>;
    createTokens(user: Users): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    updateTokens(data: UpdateTokensDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    logout(id: string): Promise<Users>;
    localRegister(data: RegisterUserDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
