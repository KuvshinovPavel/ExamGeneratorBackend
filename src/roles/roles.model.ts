import { Table, Column, BelongsToMany, Model, DataType } from "sequelize-typescript";
import { User } from "../user/user.model";
import { UserRoles } from "./user-roles.model";


interface RoleAtrributes {
    value: string
}

@Table({ tableName: "roles", createdAt: false, updatedAt: false })
export class Role extends Model<Role, RoleAtrributes>{
    @Column({ primaryKey: true, unique: true, autoIncrement: true, type: DataType.INTEGER })
    id: number;

    @Column({unique:true, type: DataType.STRING})
    value: string;

    @BelongsToMany(()=>User, ()=>UserRoles)
    users: User[]
}