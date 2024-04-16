import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProprietarioModule } from './proprietario/proprietario.module';
import { CarroModule } from './carro/carro.module';
import { Proprietario } from './proprietario/entities/proprietario.entity';
import { Carro } from './carro/entities/carro.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'dbcarro',
    entities: [ Proprietario, Carro ],
    synchronize: true,
  }),
    ProprietarioModule,
    CarroModule,
],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

