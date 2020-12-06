import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routeArr:String[] = ['home', 'about', 'contact']
  visability:boolean = true;
  poupvisible() {
   if (this.visability) {
     this.visability = false;
   } else {
     this.visability = true;
   }
 }

}
