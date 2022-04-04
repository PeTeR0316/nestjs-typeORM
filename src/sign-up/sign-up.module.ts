import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { SignUpController } from './sign-up.controller';
import { SignUp } from './sign-up.entity';
import { SignUpRepository } from './sign-up.repository';
import { SignUpService } from './sign-up.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SignUpRepository]),
  ],
  controllers: [SignUpController],
  providers: [SignUpService]
})
export class SignUpModule {}
