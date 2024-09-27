import { Injectable } from '@angular/core';
import { learningData } from '../app/data/learning';
import { Course } from '../app/model/Course';

@Injectable({
  providedIn: 'root',
})
export class LearningService {
  private learning: Course = learningData;

  constructor() {}

  getCourse(): Course {
    return this.learning;
  }
}
