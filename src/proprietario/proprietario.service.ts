import { Injectable } from '@nestjs/common';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';
import { Proprietario } from './entities/proprietario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProprietarioService {
  constructor(
    @InjectRepository(Proprietario)
    private proprietarioRepository: Repository<Proprietario>,
  ) {}

  create(createProprietarioDto: CreateProprietarioDto) {
    return this.proprietarioRepository.save(createProprietarioDto);
  }

  findAll() {
    return this.proprietarioRepository.find();
  }

  findOne(id: number) {
    return this.proprietarioRepository.findOneBy({ id });
  }

  update(id: number, updateProprietarioDto: UpdateProprietarioDto) {
    return this.proprietarioRepository.update(+id, updateProprietarioDto);
  }

  async remove(id: number) {
  
    await this.proprietarioRepository.delete(id);
  }
}

