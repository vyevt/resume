import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog',
  styles: [`
 :host{
    display:flex;
    padding:20px;
    flex-direction:column;
                height:fit-content
  }
  h1{
    padding:20px;
    margin:20px;
    font-size:20px;
    background:yellow;
    border-radius:10px
  }
  ul{
    margin:20px;
  }
  .close{
    display:flex;
width:40px;
justify-content:center;
align-self:flex-end;
align-items:center;
color:#fafafa;
font-size:16px;
height:40px;
border-radius:5px;
cursor:pointer;
background-color:red
  }
`],
  template: `
   <div class="close" (click)=onNoClick()  > x </div>
   <h1 mat-dialog-title > {{ data.title }}</h1>
    <ul>
      <div *ngFor="let task of data.tasks index as i" >
        -{{ task }}
        </div>
    </ul> 
`
  ,
  standalone: true,
  imports: [
    CommonModule,

  ],
})
export class DialogComponent {
  constructor( ) {

  }
  data:any
  onNoClick(): void {

  }
}
