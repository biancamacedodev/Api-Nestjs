import { Module } from '@nestjs/common';
import { CarroService } from './carro.service';
import { CarroController } from './carro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carro } from './entities/carro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carro])],
  exports: [TypeOrmModule],
  controllers: [CarroController],
  providers: [CarroService],
})
export class CarroModule {}
