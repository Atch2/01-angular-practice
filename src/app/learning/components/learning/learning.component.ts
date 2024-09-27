import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningService } from '../../../../service/learning.service';
import { Course } from '../../../model/Course';
import { Student } from '../../../model/Student';

@Component({
  selector: 'app-component-learning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css',
})
export class LearningComponent implements OnInit {
  course!: Course;
  idStudent!: number;
  identification!: number;
  nameStudent!: string;
  surname!: string;
  idCourse!: number;
  nameCourse!: string;
  students!: Student[];

  constructor(private service: LearningService) {}

  ngOnInit(): void {
    this.course = this.service.getCourse();
    const { id: idCourse, name: nameCourse, students } = this.course;
    this.idCourse = idCourse;
    this.nameCourse = nameCourse;
    this.students = students;
  }
}
