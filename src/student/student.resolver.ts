import { CreateStudentInput } from './create-student.input';
import { StudentType } from './student.type';
import { StudentService } from './student.service';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }
  @Query(() => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  @Mutation(() => StudentType)
  async createStudent(
    @Args('createstudentInput')
    createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
