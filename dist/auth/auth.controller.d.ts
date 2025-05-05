import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateTokensDto } from './dto/update-tokens.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    localLogin(req: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    logout(req: any): Promise<import("../users/users.entity").Users>;
    localRegister(registerUserDto: RegisterUserDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    updateTokens(updateTokensDto: UpdateTokensDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
