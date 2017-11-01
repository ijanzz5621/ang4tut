import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visible = true;
  counter = 0;

  visibleChange() {
    console.log(this.visible);
    this.visible = !this.visible;

    this.counter++;
  }

}
