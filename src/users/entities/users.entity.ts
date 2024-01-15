import { Column} from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { IUser } from '../../interfaces/user.interface';

export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  age: number

  @Column()
  email: string

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  role: string
}
