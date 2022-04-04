import { Module } from '@nestjs/common';
import { SignUpModule } from './sign-up/sign-up.module';
import { SignInModule } from './sign-in/sign-in.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeORMConfig } from './config/typeorm.config';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    SignUpModule, 
    SignInModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
