import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("tb_carros")
export class Carros {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    modelo: string

    @Column()
    marca: string

    @Column()
    ano: number
}

