import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Carro } from 'src/carro/entities/carro.entity';

@Entity()
export class Proprietario {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nome: string;
  
    @Column({ default: true })
    isActive: boolean;
  
    @OneToMany(type => Carro, carro => carro.proprietario)
    carro: Carro[];
}
