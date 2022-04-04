import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { SignUp } from './sign-up.entity';
import { SignUpRepository } from './sign-up.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class SignUpService {
    constructor (
        @InjectRepository(SignUpRepository)
        private signUpRepository: SignUpRepository,
    ) {}

    //회원가입
    // async signUpUser(signUpDto: SignUpDto): Promise<SignUp> {
    //     const { email, user_password, user_name, birth } = signUpDto;
    //     const userInfo = this.signUpRepository.create({
    //         email,
    //         user_password,
    //         user_name,
    //         birth
    //     });

    //     console.log(userInfo);

    //     await this.signUpRepository.save(userInfo);
    //     return userInfo;
    // }

    async signUpUser(signUpDto: SignUpDto): Promise<SignUp> {
        const { email, user_password, user_name, birth } = signUpDto;

        const userInfo = this.signUpRepository.create({
            email: email,
            user_password: user_password,
            user_name: user_name,
            birth: birth
        })

        console.log("==========");
        console.log(userInfo);
        console.log("==========");

        await this.signUpRepository.save(userInfo);
        return userInfo
    }



    //회원 조회
    async getUserById(email: string): Promise<SignUp> {
        const result = await this.signUpRepository.findOne(email);

        if(!result) {
            throw new NotFoundException(`해당 계정의 회원이 존재하지 않습니다.`)
        }

        return result;
    }

    // async search(userNum: string): Promise<User> {
    //     const result = await this.signUpRepository.findOneBy({userNum});

    //     if(!result) {
    //         throw new NotFoundException(`"${userNum}" 사용자가 없습니다.`)
    //     }

    //     return result;
    // }
}