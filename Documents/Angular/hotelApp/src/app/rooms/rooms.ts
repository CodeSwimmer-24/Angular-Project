export interface Room {
  availableRooms: number;
  bookedRooms: number;
  totalRooms: number;
}

export interface RoomDetails {
  rooNo: number;
  roomType: string;
  avalabel: boolean;
  bookInTime: Date;
  bookOutTime: Date;
}
