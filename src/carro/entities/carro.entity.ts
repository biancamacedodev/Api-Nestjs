import { Proprietario } from 'src/proprietario/entities/proprietario.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity()
export class Carro {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  modelo: string;

  @Column()
  ano: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Proprietario, (proprietario) => proprietario.carro)
  proprietario: Proprietario
}

