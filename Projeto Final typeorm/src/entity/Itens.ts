import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import { Tipos } from "./Tipos"



@Entity()
export class Itens {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    descricao: string

    @ManyToOne(() => Tipos)
    @JoinColumn({name: 'id_tipos'})
    tipo: Tipos


}