/**
 * Created by DzianisH on 07.11.2016.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const rootRote: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
const routes: Routes = [
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(rootRote), RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
