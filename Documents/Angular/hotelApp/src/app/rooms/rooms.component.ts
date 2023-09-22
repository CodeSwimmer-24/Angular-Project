import {
  Component,
  DoCheck,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomDetails } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hotelApp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Rose Hotels';
  noOfRooms = 10;
  title = 'Room Details';

  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 10,
    totalRooms: 20,
  };

  theRoomWhichIsSelected!: RoomDetails;

  roomsDetail: RoomDetails[] = [];
  e: any;

  toogle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Room Listing';
  }

  selectRoom(room: RoomDetails) {
    this.theRoomWhichIsSelected = room;
  }

  addRooms() {
    const newRoom: RoomDetails = {
      rooNo: 5,
      roomType: 'New Room',
      avalabel: true,
      bookInTime: new Date('11-Nov-12'),
      bookOutTime: new Date('11-Nov-12'),
    };
    // this.roomsDetail.push(newRoom);
    this.roomsDetail = [...this.roomsDetail, newRoom];
  }

  // ngDoCheck(): void {
  //   console.log('on change do check');
  // }
  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() {}

  ngAfterViewInit() {
    console.log(this.headerComponent);
    this.headerChildrenComponent.last.title = 'Last Header Name';
  }

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.headerComponent.title = 'My new Room';
    this.roomsDetail = [
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
  }
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
