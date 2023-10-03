import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomDetails } from '../rooms';

@Component({
  selector: 'hotelApp-rooms-lists',
  templateUrl: './rooms-lists.component.html',
  styleUrls: ['./rooms-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListsComponent implements OnChanges, OnDestroy {
  @Input() title = '';

  @Input() roomsDetail: RoomDetails[] | null = [];
  @Output() selectedRoom = new EventEmitter<RoomDetails>();

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['title']) {
    //   this.title = changes['title'].currentValue.toUpperCase();
    // }
    // console.log(changes['title'].currentValue.toUpperCase());
  }

  selectRoom(room: RoomDetails) {
    this.selectedRoom.emit(room);
  }
  ngOnDestroy(): void {
    console.log('OnDistroy is called');
  }
}
