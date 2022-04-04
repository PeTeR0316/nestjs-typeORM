import { Controller, Get } from '@nestjs/common';
import { SignInService } from './sign-in.service';

@Controller('sign-in')
export class SignInController {
    constructor(private signInService: SignInService) {}
    

    @Get('')
    test() {
        return "nest ok!";
    }
}
