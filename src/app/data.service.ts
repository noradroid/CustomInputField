import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class DataDTO {
  id!: number;
  name!: any;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: DataDTO[] = [
    { id: 1, name: 'Andy' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Casey' },
    { id: 4, name: 'Daniel' },
    { id: 5, name: 'Ethan' },
    { id: 6, name: 'France' },
    { id: 7, name: 'Glen' },
    { id: 8, name: 'Hiller' },
    { id: 9, name: 'Ivan' },
    { id: 10, name: 'Jessica' },
  ];

  getData(): Observable<DataDTO[]> {
    return of(this.data);
  }
  
  getCurrent(): Observable<DataDTO> {
    return of (this.data[0]);
  }
}
