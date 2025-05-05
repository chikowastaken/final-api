import { Strategy } from 'passport-jwt';
import { JwtUserPayload } from '../auth.types';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: JwtUserPayload): Promise<{
        id: string;
        email: string;
    }>;
}
export {};
