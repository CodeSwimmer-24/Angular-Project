import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'hotelApp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Rose Hotels';
  noOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 10,
    totalRooms: 20,
  };

  toogle() {
    this.hideRooms = !this.hideRooms;
  }
  constructor() {}
  ngOnInit(): void {}
}
