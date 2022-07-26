import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DataDTO, DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CustomInputField';
  options1 = [1, 2, 3];
  options2!: DataDTO[];
  formValues!: FormGroup;
  initialValue2 = {
    id: 3,
    name: 'Value 3',
  };

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.options2 = data;
    });
    this.dataService.getCurrent().subscribe(current => {
      this.formValues = this.formBuilder.group({
        value1: [''],
        value2: [current.id],
      });
    })
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
