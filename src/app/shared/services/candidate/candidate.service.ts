import { Injectable } from '@angular/core';
import { candidate, candidateExpirience ,skills} from 'src/app/core/const/info/index';



@Injectable({
  providedIn: 'root'
})
export class CandidateService {
    
   



  get candidate() {
    return  candidate
  }
  get expirience() {
    return candidateExpirience
  }
  get skills() {
    return skills
  }
   constructor() { }
}
