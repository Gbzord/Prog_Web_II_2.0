export interface User {
    id: string
    name: string
    email: string
   
    createdAt?: Date
    updatedAt?: Date
}

export interface UserCreate {
    name: string
    email: string
}   

export interface userRepository {
    create(data: UserCreate): Promise<User>;
    findbyEmail(email: string): Promise<User | null>;
    delete(id: string): Promise<void>;
}