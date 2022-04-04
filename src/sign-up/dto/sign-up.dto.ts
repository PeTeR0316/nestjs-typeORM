import { IsNotEmpty } from 'class-validator'
export class SignUpDto {
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    user_password: string;

    @IsNotEmpty()
    user_name: string;

    @IsNotEmpty()
    birth: string;
}