import { EntityRepository, Repository } from "typeorm";
import { SignUp } from "./sign-up.entity";

//클래스를 사용자 정의 저장소로 선어하는 데 사용, 사용자 지정 저장소는 일부 특정 엔티티를 관리하거나 일반 저장소 일 수 있다.
@EntityRepository(SignUp)
export class SignUpRepository extends Repository<SignUp> {

}