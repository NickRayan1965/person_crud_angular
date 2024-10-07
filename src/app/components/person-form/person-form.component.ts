import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonService } from '../../service/person.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from '../../model/Person';
import { CommonModule } from '@angular/common';
import { AlertMessageComponent } from "../alert-message/alert-message.component";

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AlertMessageComponent],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css'
})
export class PersonFormComponent implements OnInit {
  @Input() isEdit = false;
  @Input() basePerson: Person;
  @Output() saveEvent = new EventEmitter<void>();
  activateAlert = false;
  personForm: FormGroup;
  messageAlert: string;
  messageType: string;
  isEnabled: boolean;
  constructor(private readonly personService: PersonService, private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      names: [this.basePerson?.names ?? '', [Validators.required, Validators.maxLength(100)]],
      lastname: [this.basePerson?.lastname ?? '', [Validators.required, Validators.maxLength(100)]],
      age: [this.basePerson?.age ?? null, [Validators.min(0), Validators.max(150)]],
      id: [this.basePerson?.id ?? '']
    });
    this.isEnabled = this.basePerson?.isEnabled;
  }
  onSubmit() {
    if (!this.personForm.valid) {
      console.log("mal")
      return;
    }
    const data: Person = this.personForm.value;
    if(this.isEdit){
      this.personService.update(data.id, {...data, isEnabled : this.isEnabled}).subscribe(()=> this.suscribeHandler());
    } else {
      this.personService.createPerson(data).subscribe(()=> this.suscribeHandler());
    }
  }
  suscribeHandler() {
    if(!this.isEdit) this.cleanForm();
    this.sendSaveAler();
    this.setMessageAlert();
  }
  cleanForm(){
    this.personForm.reset();
  }
  setMessageAlert() {
    this.activateAlert=true;
    this.messageAlert = this.isEdit ? "Actualizado correctamente": "Guardado correctamente";
    this.messageType = this.isEdit ? "info" : "success";
  }
  closeAlertEvent(){
    this.activateAlert=false;
  }

  sendSaveAler() {
    this.saveEvent.emit();
  }


}
