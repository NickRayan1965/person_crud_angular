import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'home', component: HomeComponent,
            },
            {
                path: 'persons/:id', component: EditPersonComponent
            },
            {
                path: '', redirectTo: '/home', pathMatch: 'full'
            }
        ]
    },
    
];
