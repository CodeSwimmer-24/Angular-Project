import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}
  log(msg: String) {
    console.log(msg);
  }
}
