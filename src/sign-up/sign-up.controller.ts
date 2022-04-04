import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { SignUp } from './sign-up.entity';
import { SignUpService } from './sign-up.service';

@Controller('sign-up')
export class SignUpController {
    constructor(private signUpService: SignUpService) {}

    //회원가입
    @Post('/')
    signUpUser(@Body() signUpDto: SignUpDto): Promise<SignUp> {
        return this.signUpService.signUpUser(signUpDto);
    }

    //회원조회
    @Get('/user/:email')
    getUserById(@Param('email') email: string): Promise<SignUp> {
        return this.signUpService.getUserById(email);
    }

    // @Get('/search')
    // search(@Query('seq') userNum: string): Promise<User> {
    //     return this.signUpService.search(userNum);
    // }
}
