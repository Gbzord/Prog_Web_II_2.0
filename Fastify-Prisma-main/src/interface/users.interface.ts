export interface Users {

    id: string;
    name: string;
    email: string;
    
}

interface UserCreate{
    name: string;
    email: string;
}

export interface UserRepository{
    create(data: UserCreate): Promise<Users>;
}