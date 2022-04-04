import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

//데이터 베이스 테이블 생성 역할
@Entity()
export class SignUp extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    user_password: string;

    @Column()
    user_name: string;

    @Column()
    birth: string;
}