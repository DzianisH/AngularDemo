/**
 * Created by DzianisH on 07.11.2016.
 */

import {Component} from "@angular/core";
import {HeroService} from "./hero.service";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    styleUrls: ['app.component.css'],
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,
    providers: [HeroService]
})
export class AppComponent{
    title = 'Tour of Heroes';
}
