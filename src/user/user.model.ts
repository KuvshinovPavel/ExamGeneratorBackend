import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserAttributes {
    userName: string;
    email: string;
    password: string;
}

@Table({ tableName: 'users', createdAt:false, updatedAt: false })
export class User extends Model<User, UserAttributes> {
    @Column({ primaryKey: true, unique: true, autoIncrement: true, type: DataType.INTEGER })
    id: number;

    @Column({type:DataType.STRING, allowNull:false})
    userName: string;

    @Column({type:DataType.STRING, unique:true, allowNull:false})
    email: string;

    @Column({type:DataType.STRING,  allowNull:false})
    password: string;

    @BelongsToMany(()=>Role,()=>UserRoles)
    roles: Role[];

    
}