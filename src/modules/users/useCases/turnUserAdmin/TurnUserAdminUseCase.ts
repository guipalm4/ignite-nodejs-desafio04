import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const found = this.usersRepository.findById(user_id);

    if (!found) {
      throw new Error("User id not found");
    }

    return this.usersRepository.turnAdmin(found);
  }
}

export { TurnUserAdminUseCase };
