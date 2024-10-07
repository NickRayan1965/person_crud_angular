import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PersonFormComponent } from '../person-form/person-form.component';
import { PersonService } from '../../service/person.service';
import { Person } from '../../model/Person';
import { Router } from '@angular/router';
import { AlertMessageComponent } from "../alert-message/alert-message.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PersonFormComponent, AlertMessageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  showAlert = false;
  deletedMessage = "Eliminado correctamente";

  constructor(private readonly personService: PersonService, private readonly router: Router){}
  ngOnInit(): void {
    this.getPersons();
  }
  title = 'crud_person';
  handlerShowAlert() {
    this.showAlert = true;
  }

  persons: Person[];
  onEdit(id: number) {
    this.router.navigate(['/persons', id]);
  }
  onDelete(id: number) {
    this.personService.delete(id).subscribe(()=>this.handleDeleteSucribe());
  }
  getPersons() {
    this.personService.getPersons().subscribe((persons)=>{
      this.persons = persons;
    });
  }
  handleDeleteSucribe(){
    this.showAlert = true;
    this.getPersons();
  }
  closeAlertEvent(){
    this.showAlert=false;
  }
  createAlertEvent() {
    this.getPersons();
  }

}
