import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { Hero } from '../../../models/hero.model';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-simple-reactive',
  templateUrl: './simple-reactive.component.html',
  styleUrls: ['./simple-reactive.component.css']
})
export class SimpleReactiveComponent implements OnInit {
  form: FormGroup;
  powers: SelectItem[];

  constructor(private fb: FormBuilder, private messageService: MessageService) { 
    this.powers = [
      {label: 'Select a power', value: null},
      {label: 'Super Speed', value: 1},
      {label: 'Super Strength', value: 2},
      {label: 'Fly', value: 3},
      {label: 'Super Smart', value: 4},
    ]
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: new FormControl(null, Validators.required),
      alterEgo: new FormControl(null, Validators.required),
      powerId: new FormControl(null, Validators.required)
    });
  }

  submit() {
    if (this.form.valid) {
      const hero = this.mapFormToHero();
      this.messageService.add({severity: 'success', summary: 'hero Submitted', detail: 'Go Save the day'});
    } else {
      this.messageService.add({severity: 'error', summary: 'Form Invalid'});
    }
  }

  get diagnostic () {
    return this.form.value;
  }

  mapFormToHero(): Hero {
    // in pass we used a library called class-transformer as well as a 
    // fromJSON function so we didnt have to do this everywhere we can just call this
    // const newHero = new Hero().fromJSON(this.form.value);
    const hero = new Hero();
    hero.name = this.form.get('name').value;
    hero.alterEgo = this.form.get('alterEgo').value;
    hero.powerId = this.form.get('powerId').value;
    return hero;
  }
}
