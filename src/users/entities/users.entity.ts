import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { IUser } from '../../interfaces/user.interface';
import { ROLES } from '../../constants/roles';
import { UsersProjectsEntity } from './usersProjects.entity';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  age: number

  @Column({ unique: true })
  email: string
  ity
  @Column({ unique: true })
  username: string

  @Column()
  password: string

  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;

  @OneToMany(() => UsersProjectsEntity, (usersProjects) => usersProjects.user)
  projectsIncludes: UsersProjectsEntity[];
}
