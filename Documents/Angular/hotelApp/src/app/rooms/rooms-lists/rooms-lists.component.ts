import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
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
export class RoomsListsComponent implements OnChanges {
  @Input() title = '';

  @Input() roomsDetail: RoomDetails[] = [];
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
}
