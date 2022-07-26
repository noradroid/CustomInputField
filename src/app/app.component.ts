import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CustomInputField';
  options1 = [1, 2, 3];
  options2 = [
    { id: 1, name: 'Value 1' },
    { id: 2, name: 'Value 2' },
    { id: 3, name: 'Value 3' },
  ];
  formValues!: FormGroup;
  initialValue2 = {
    id: 3,
    name: 'Value 3',
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formValues = this.formBuilder.group({
      value1: [''],
      value2: [this.initialValue2.id],
    });
  }

  get value1(): AbstractControl {
    return this.formValues.get('value1')!;
  }

  get value2(): AbstractControl {
    return this.formValues.get('value2')!;
  }

  valueUpdated(field: string, value: string | number): void {
    this.formValues.get(field)?.setValue(value);
    console.log(
      `Changes: ${this.formValues.get(field)} ${
        this.formValues.get('value1')?.valid
      }`
    );
  }
}
