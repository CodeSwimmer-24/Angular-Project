import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hotelApp-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [RoomsService],
})
export class EmployeesComponent {
  empName: string = 'Fahad Mhamood';

  constructor(@Self() private roomServices: RoomsService) {}
}
