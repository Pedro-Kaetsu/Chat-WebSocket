import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
  async create(email: string) {
    
    const usersRepository = getCustomRepository(UsersRepository);
    //Verificar se o usuario existe

    const userExists = await usersRepository.findOne({
      email,
    });

    if (userExists) {
      return userExists;
    }

    //Se nao existir, salva no DB
    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { UsersService };