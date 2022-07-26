import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CustomInputField';
  options = [1, 2, 3];
  formValues!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValues = this.formBuilder.group({
      value1: ['']
    });
  }

  get value1(): AbstractControl {
    return this.formValues.get('value1')!;
  }

  valueUpdated(field: string, value: string | number): void {
    this.formValues.get(field)?.setValue(value);
    console.log(`Changes: ${this.formValues.get(field)} ${this.formValues.get('value1')?.valid}`);
  }

}
