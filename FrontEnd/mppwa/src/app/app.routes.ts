import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent, // this is the component with the <router-outlet> in the template
       
    }
];
