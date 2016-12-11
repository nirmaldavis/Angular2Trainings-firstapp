import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent },
    {path: 'profile', component: ProfileComponent}

    //{path: 'profile', component: ProfileComponent, outlet:'myoutlet'}
];


export const routing = RouterModule.forRoot(routes);