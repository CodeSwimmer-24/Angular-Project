import { Injectable } from '@angular/core';
import { RoomDetails } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomsDetail: RoomDetails[] = [
    {
      rooNo: 1,
      roomType: 'Delex',
      avalabel: true,
      bookInTime: new Date('11-Nov-12'),
      bookOutTime: new Date('11-Nov-12'),
    },
    {
      rooNo: 2,
      roomType: 'Delex',
      avalabel: true,
      bookInTime: new Date('11-Nov-12'),
      bookOutTime: new Date('11-Nov-12'),
    },
    {
      rooNo: 3,
      roomType: 'Delex',
      avalabel: true,
      bookInTime: new Date('11-Nov-12'),
      bookOutTime: new Date('11-Nov-12'),
    },
    {
      rooNo: 4,
      roomType: 'Delex',
      avalabel: true,
      bookInTime: new Date('11-Nov-12'),
      bookOutTime: new Date('11-Nov-12'),
    },
  ];
  constructor() {
    console.log('Room service initialized...');
  }
  getRooms() {
    return this.roomsDetail;
  }
}
