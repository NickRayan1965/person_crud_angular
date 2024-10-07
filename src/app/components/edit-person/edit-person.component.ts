import { Component, OnInit } from '@angular/core';
import { PersonFormComponent } from "../person-form/person-form.component";
import { PersonService } from '../../service/person.service';
import { Person } from '../../model/Person';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-person',
  standalone: true,
  imports: [PersonFormComponent, CommonModule],
  templateUrl: './edit-person.component.html',
  styleUrl: './edit-person.component.css'
})
export class EditPersonComponent implements OnInit {
  constructor(private readonly personService: PersonService, private readonly route: ActivatedRoute){}
  personData: Person;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '1';
    console.log(id)
    this.personService.findById(+id).subscribe((data) => {
      console.log({ data});
      this.personData = data;
    })
  }
  
}
