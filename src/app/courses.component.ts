import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{title }}</h2>

    <img [src]="imageUrl" />
    <table>
      <tr>
        <td [attr.colspan]="colSpan">fucked off</td>
      </tr>
    </table>
    <button class="btn btn-primary" [class.active]="isActive">save</button>
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">save</button>
    <button (click)="onSave()">save</button>
  `
})

export  class CoursesComponent {
  title = 'List of courses';
  courses;
  imageUrl = '';
  colSpan = 2;
  isActive = false;

  constructor(service: CoursesService){
    // let service = new CoursesService();
     // <ul>
    //   <li *ngFor="let course of courses">
    //   {{ course }}
    //   </li>
    // </ul>
    this.courses = service.getCourses();

  }
  onSave(){
    console.log('Button clicked');
  }
}
