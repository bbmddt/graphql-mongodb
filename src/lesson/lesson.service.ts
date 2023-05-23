import { CreateLessonInput } from './lesson.input';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });

    console.log(`added new lesson by ${name}, ${startDate}, ${endDate}`);
    return await this.lessonRepository.save(lesson);
  }

  async getLessons(): Promise<Lesson[]> {
    return await this.lessonRepository.find();
  }

  async getLesson(id: string): Promise<Lesson> {
    return await this.lessonRepository.findOne({ where: { id: id } });
  }
}
