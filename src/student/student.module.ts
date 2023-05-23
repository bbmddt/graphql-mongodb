import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { StudentResolver } from './student.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService, StudentResolver],
  exports: [StudentService],
})
export class StudentModule {}
