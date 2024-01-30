import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResumeLayout2RoutingModule } from './resume-layout2-routing.module';
import { CandidateService } from 'src/app/shared/services/candidate/candidate.service';
import { Skill, Candidate, Experience } from 'src/app/core/const/interfaces';
 import { ExpirienceCardModule } from 'src/app/feature/expirience-card/expirience-card.module';
import { ContactsModule } from 'src/app/feature/contacts/contacts.module';
import { SkillsModule } from 'src/app/feature/skills/skills.module';
import { FooterModule } from "../footer/footer.module";
import { Meta } from '@angular/platform-browser';





@Component({
    standalone: true,
    selector: 'app-resume-layout2',
    templateUrl: './resume-layout2.component.html',
    styleUrls: ['./resume-layout2.component.scss'],
    imports: [ResumeLayout2RoutingModule, CommonModule, ExpirienceCardModule, ContactsModule, SkillsModule, FooterModule]
})
export class ResumeLayout2Component {
  myFunction() {
    window.document.body.style.cursor = "wait";
  }
  candidate: Candidate
  expirience: Experience[]
  skills: Skill[]
  panelOpenState = false;

  title?: string;
  message?: string;
  showDialog = false;


   

  constructor(candidateService: CandidateService, private meta: Meta) {
    this.candidate = candidateService.candidate
    this.expirience = candidateService.expirience
    this.skills = candidateService.skills
    this.meta.addTag({ name: 'description', 
    content: 'Author:' +  this.candidate.name});
  }






}

