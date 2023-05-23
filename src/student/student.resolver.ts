import { CreateStudentInput } from './create-student.input';
import { StudentType } from './studen.type';
import { StudentService } from './student.service';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }
  @Query((returns) => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createstudentInput')
    createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
