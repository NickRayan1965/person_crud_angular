import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Person } from './model/Person';
import { CommonModule } from '@angular/common';
import { PersonService } from './service/person.service';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { NavigationComponent } from "./components/navigation/navigation.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
