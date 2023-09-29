import {
  Component,
  ElementRef,
  Inject,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'hotelApp-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello</h1>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    @Optional() private logger: LoggerService,
    @Inject(localStorageToken) private localStorage: any
  ) {}
  title = 'hotelApp';
  // role = 'user';
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit() {
    this.logger?.log('Logger service initialized...');
    this.name.nativeElement.innerText = 'My Name';
    this.localStorage.setItem('name', 'Local Name');
  }

  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    console.log(componentRef);
    componentRef.instance.title = ' New Room';
  }
}
