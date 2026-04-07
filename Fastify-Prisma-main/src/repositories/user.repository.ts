import type { Users, UserRepository } from "../interface/users.interface.js";   

class UserRepositoryPrisma implements UserRepository {
    async create(data: UserCreate): Promise<Users> {
    }     

}