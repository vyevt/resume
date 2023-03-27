import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { candidate } from './core/const/info/candidate';

@Injectable()
export class SiteNamePageTitleStrategy extends TitleStrategy {
    constructor(private title: Title) {
        super();
    }

    override updateTitle(routerState: RouterStateSnapshot) {
        const title = this.buildTitle(routerState);
        if (title !== undefined && title !== "") {
            this.title.setTitle(`${title} - ${candidate.role} ${candidate.name}    `);
        } else {
            this.title.setTitle(`   ${candidate.role} ${candidate.name}`);
        }
    }
}
