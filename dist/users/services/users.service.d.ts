import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UsersEntity } from '../entities/users.entity';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UsersEntity>);
    createUser(body: UserDTO): Promise<UsersEntity>;
    findUsers(): Promise<UsersEntity[]>;
    findUserById(id: string): Promise<UsersEntity>;
    updateUser(body: UserUpdateDTO, id: string): Promise<UpdateResult>;
    deleteUser(id: string): Promise<DeleteResult | undefined>;
}
