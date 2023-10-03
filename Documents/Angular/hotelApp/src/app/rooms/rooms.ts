export interface Room {
  availableRooms: number;
  bookedRooms: number;
  totalRooms: number;
}

export interface RoomDetails {
  roomNumber?: string;
  roomType: string;
  amenities: string;
  price: number;
  checkinTime: Date;
  checkoutTime: Date;
}
