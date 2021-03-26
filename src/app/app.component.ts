import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'codewithmosh';
  // post = {
  //   title: 'title',
  //   isFavorite: true
  // }
  // courses = [];
  // viewMode = 'map';
  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
  ];

  onadd(){
    this.courses.push({id: 4, name: 'course4'});
  }
  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
