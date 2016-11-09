/**
* Created by DzianisH on 07.11.2016.
*/
// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import {Hero} from "./hero";


@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    styleUrls: ['hero-detail.component.css'],
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit{
    @Input()
    hero: Hero;

    constructor(
       private heroService: HeroService,
       private route: ActivatedRoute,
       private location: Location
    ){}

    save(): void{
        this.heroService.update(this.hero);
        this.goBack();
    }

    goBack(): void{
        this.location.back();
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id).then(result => this.hero = result);
        });
    }
}
