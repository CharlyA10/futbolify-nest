import { Repository } from 'typeorm';
import { UsersEntity } from '../entities/users.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UsersEntity>);
}
