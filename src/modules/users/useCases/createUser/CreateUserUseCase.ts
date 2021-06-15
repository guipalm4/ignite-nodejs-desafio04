import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const alreadyExist = this.usersRepository.findByEmail(email);

    if (alreadyExist) {
      throw new Error("User email already exist.");
    }

    return this.usersRepository.create({ email, name });
    // Complete aqui
  }
}

export { CreateUserUseCase };
