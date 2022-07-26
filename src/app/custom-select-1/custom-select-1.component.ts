import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-select-1',
  templateUrl: './custom-select-1.component.html',
  styleUrls: ['./custom-select-1.component.scss'],
})
export class CustomSelect1Component {
  @Input() outValue: number | undefined;
  @Output() outValueChange = new EventEmitter<number>();
  value: number | undefined;
  @Input() options: number[] | undefined;
  @Input() placeholder: string | undefined;
  isOpen = false;

  openDropdownBox(): void {
    this.isOpen = true;
  }

  closeDropdownBox(): void {
    this.isOpen = false;
  }

  updateValue(selectedId: any) {
    this.outValue = selectedId;
    this.value = selectedId;
    this.outValueChange.emit(selectedId);
    this.closeDropdownBox();
    console.log(`${selectedId}`);
  }
}
