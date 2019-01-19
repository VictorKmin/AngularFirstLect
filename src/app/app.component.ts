import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicked = 0;
  currentNumb: any;

  people = [
    {name: 'Dima', age: 22},
    {name: 'Victor', age: 23},
    {name: 'Katya', age: 16},
  ];

  someClisck() {
    console.log(this.clicked);
    this.clicked++;
  }

  someFn(someElement: HTMLInputElement) {
    console.log(someElement);
    console.log(someElement.value);
  }

  anotherSwitch(number: any) {
    this.currentNumb = number;
  }
}
