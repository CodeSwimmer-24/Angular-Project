import {
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomDetails } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'hotelApp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Rose Hotels';
  noOfRooms = 10;
  title = 'Room Details';

  subscription!: Subscription;

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomService.getRooms$.pipe(
    catchError((err) => {
      this.error$.next(err.message);
      return of([]);
    })
  );

  getRoomsCount$ = this.roomService.getRooms$.pipe(
    map((room) => {
      return room.length;
    })
  );

  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 10,
    totalRooms: 20,
  };

  stream = new Observable((observer) => {
    observer.next('user 1');
    observer.next('user 2');
    observer.next('user 3');
    observer.complete();
  });

  theRoomWhichIsSelected!: RoomDetails;

  roomsDetail: RoomDetails[] = [];
  e: any;
  http: any;

  toogle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Room Listing';
  }

  selectRoom(room: RoomDetails) {
    this.theRoomWhichIsSelected = room;
  }

  addRooms() {
    const newRoom: RoomDetails = {
      // roomNumber: '5',
      roomType: 'New Room',
      amenities: 'Hello',
      price: 500,
      checkinTime: new Date('11-Nov-12'),
      checkoutTime: new Date('11-Nov-12'),
    };
    // this.roomsDetail.push(newRoom);
    // this.roomsDetail = [...this.roomsDetail, newRoom];
    this.roomService.addRooms(newRoom).subscribe((data) => {
      this.roomsDetail = data;
    });
  }

  editRooms() {
    const newRoom: RoomDetails = {
      roomNumber: '2',
      roomType: 'New Room',
      amenities: 'Hello New Room',
      price: 600,
      checkinTime: new Date('11-Nov-12'),
      checkoutTime: new Date('11-Nov-12'),
    };
    // this.roomsDetail.push(newRoom);
    // this.roomsDetail = [...this.roomsDetail, newRoom];
    this.roomService.editRooms(newRoom).subscribe((data) => {
      this.roomsDetail = data;
    });
  }

  deleteRooms() {
    this.roomService.deleteRooms('3').subscribe((data) => {
      this.roomsDetail = data;
    });
  }

  // ngDoCheck(): void {
  //   console.log('on change do check');
  // }
  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService();

  constructor(private roomService: RoomsService) {}

  ngAfterViewInit() {
    console.log(this.headerComponent);
    this.headerChildrenComponent.last.title = 'Last Header Name';
  }

  ngOnInit(): void {
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err, 'error'),
    });

    // console.log(this.roomService.getRooms());
    // this.roomService.getRooms$.subscribe((room) => {
    //   this.roomsDetail = room;
    // });
    console.log(this.headerComponent);
    this.headerComponent.title = 'My new Room';

    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Req Is Sent');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Req Success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          console.log('In progress');
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
