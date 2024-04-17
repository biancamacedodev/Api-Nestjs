import { Injectable } from '@nestjs/common';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Carro } from './entities/carro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarroService {
  constructor(
    @InjectRepository(Carro)
    private carroRepository: Repository<Carro>,
  ) {}
  
  create(createCarroDto: CreateCarroDto) {
    return this.carroRepository.save(createCarroDto);
  }

  findAll(): Promise<Carro[]> {
    return this.carroRepository.find();
  }

  findOne(id: number): Promise<Carro> {
    return this.carroRepository.findOneBy({ id });
  }

  update(id: number, updateCarroDto: UpdateCarroDto) {
    return this.carroRepository.update(+id, updateCarroDto);
  }

  async remove(id: number) {
    await this.carroRepository.delete(id);
  }
}
