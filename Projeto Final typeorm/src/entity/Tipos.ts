import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"


@Entity()
export class Tipos {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tipo: string


}