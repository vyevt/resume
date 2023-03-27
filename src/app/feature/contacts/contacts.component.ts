import { Component, Input } from '@angular/core';
import { Candidate } from 'src/app/core/const/interfaces/candidate.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
@Input() candidate!:Candidate
}
