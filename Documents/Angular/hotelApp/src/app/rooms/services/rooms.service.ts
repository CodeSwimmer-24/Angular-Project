import { Inject, Injectable } from '@angular/core';
import { RoomDetails } from '../rooms';
import { AppConfig } from 'src/app/AppConfig/app.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { APP_CONFIG_SERVICE } from 'src/app/AppConfig/appConfig.service';
import { shareReplay } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomsDetail: RoomDetails[] = [];
  // header = new HttpHeaders({ token: '1223' });
  getRooms$ = this.http
    .get<RoomDetails[]>('/api/rooms', {
      // headers: this.header,
    })
    .pipe(shareReplay(1));

  constructor(
    @Inject(APP_CONFIG_SERVICE) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiEndPoint);
    console.log('Room service initialized...');
  }
  getRooms() {
    return this.http.get<RoomDetails[]>('/api/rooms');
  }
  addRooms(room: RoomDetails) {
    return this.http.post<RoomDetails[]>('/api/rooms', room);
  }
  editRooms(room: RoomDetails) {
    return this.http.put<RoomDetails[]>(`/api/rooms/${room.roomNumber}`, room);
  }
  deleteRooms(id: string) {
    return this.http.delete<RoomDetails[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const req = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );
    return this.http.request(req);
  }
}
