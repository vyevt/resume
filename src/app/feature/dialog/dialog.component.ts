import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  styles: [`
 :host{
    padding:20px;
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
`],
  template: `
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
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
