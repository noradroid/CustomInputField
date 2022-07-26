import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-select-2',
  templateUrl: './custom-select-2.component.html',
  styleUrls: ['./custom-select-2.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelect2Component),
      multi: true,
    },
  ],
})
export class CustomSelect2Component implements ControlValueAccessor, OnInit {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() options!: { id: number; name: any }[];
  @Input() selectedId!: number;
  selectedName: any = '';
  isOpen = false;

  onChange: any = (_: any) => {};
  onTouched: any = () => {};

  ngOnInit(): void {
    console.log(this.selectedId);
    this.selectedName = this.options.find(op => op.id === this.selectedId)?.name;
  }

  writeValue(id: number): void {
    this.selectedId = id;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateSelected(id: number): void {
    this.writeValue(id);
    this.selectedName = this.options.find(
      (op) => op.id === this.selectedId
    )?.name;
    console.log(this.selectedId);
    console.log(this.selectedName);
    this.onChange(id);
    this.onTouched();
    this.closeDropdown();
  }

  openDropdown(): void {
    this.isOpen = true;
  }

  closeDropdown(): void {
    this.isOpen = false;
  }
}
