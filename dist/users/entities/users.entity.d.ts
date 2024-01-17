import { BaseEntity } from '../../config/base.entity';
import { IUser } from '../../interfaces/user.interface';
import { ROLES } from '../../constants/roles';
import { UsersProjectsEntity } from './usersProjects.entity';
export declare class UsersEntity extends BaseEntity implements IUser {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    ity: any;
    username: string;
    password: string;
    role: ROLES;
    projectsIncludes: UsersProjectsEntity[];
}
