import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResumeLayout1RoutingModule } from './resume-layout1-routing.module';
import { CandidateService } from 'src/app/shared/services/candidate/candidate.service';
import { Skill, Candidate, Experience } from 'src/app/core/const/interfaces';
 import { ExpirienceCardModule } from 'src/app/feature/expirience-card/expirience-card.module';
import { ContactsModule } from 'src/app/feature/contacts/contacts.module';
import { SkillsModule } from 'src/app/feature/skills/skills.module';
import { FooterModule } from "../footer/footer.module";
import { Meta } from '@angular/platform-browser';





@Component({
    standalone: true,
    selector: 'app-resume-layout1',
    templateUrl: './resume-layout1.component.html',
    styleUrls: ['./resume-layout1.component.scss'],
    imports: [ResumeLayout1RoutingModule, CommonModule, ExpirienceCardModule, ContactsModule, SkillsModule, FooterModule]
})
export class ResumeLayout1Component {
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

