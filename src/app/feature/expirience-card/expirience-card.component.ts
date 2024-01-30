import { Component, Input } from '@angular/core';
 import { Experience } from 'src/app/core/const/interfaces/expirience.interface';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-expirience-card',
  templateUrl: './expirience-card.component.html',
  styleUrls: ['./expirience-card.component.scss']
})
export class ExpirienceCardComponent {
@Input() project!:  Experience 
constructor( ){}
openDialog(title:string, tasks:string[]) {
  /* this.dialog.open(DialogComponent, {
    data: {
      tasks: tasks,
      title: title,

    },
  }); */
}
}
