import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/core/const/interfaces/skill.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
 @Input() skills!: Skill[]
 
  selectedSkill: Skill  | null = null
  optionSelected(event: Skill ): boolean {
    if (this.selectedSkill == event) {
      this.selectedSkill = null
      return false

    }

    this.selectedSkill = event
    return true

}
}