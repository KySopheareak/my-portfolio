import { Routes } from '@angular/router';
import { HomeComponentComponent } from '../../home-component/home-component.component';
import { ServiceComponentComponent } from '../../service-component/service-component.component';
import { AboutComponentComponent } from '../../about-component/about-component.component';
import { ProjectComponentComponent } from '../../project-component/project-component.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponentComponent
    },
    {
        path: 'services',
        component: ServiceComponentComponent
    },
    {
        path: 'about-me',
        component: AboutComponentComponent
    },
    {
        path: 'projects',
        component: ProjectComponentComponent
    }
];
