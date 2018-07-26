import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Hero } from '../../../models/hero.model';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-simple-template',
  templateUrl: './simple-template.component.html',
  styleUrls: ['./simple-template.component.css']
})
export class SimpleTemplateComponent implements OnInit {
  powers: SelectItem[];
  hero: Hero;
  @ViewChild('heroForm') form: NgForm;
  constructor(private messageService: MessageService) { 
    this.powers = [
      {label: 'Select a power', value: null},
      {label: 'Super Speed', value: 1},
      {label: 'Super Strength', value: 2},
      {label: 'Fly', value: 3},
      {label: 'Super Smart', value: 4},
    ]

    this.hero = new Hero();
  }

  ngOnInit() {
    // if we uncomment this and comment the creation in the constructor
    // a error gets thrown because the ngModel bindings are trying to grab values that 
    //dont exist since the hero hadnt been created yet. 
    // this.hero = new Hero(); 
  }

  submit() {
    if (this.form.valid) {
      this.messageService.add({severity: 'success', summary: 'hero Submitted', detail: 'Go Save the day'})
    } else {
      this.messageService.add({severity: 'error', summary: 'Form Invalid'});
    }
  }

  get diagnostic() {
    return JSON.stringify(this.hero)
  }
}
