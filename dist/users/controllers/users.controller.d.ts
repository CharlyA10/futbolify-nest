import { UsersService } from '../services/users.service';
import { UserDTO } from '../dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    registerUser(body: UserDTO): Promise<import("../entities/users.entity").UsersEntity>;
    findAllUsers(): Promise<import("../entities/users.entity").UsersEntity[]>;
}
