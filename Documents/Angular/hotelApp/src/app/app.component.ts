import {
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hotelApp-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello</h1>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hotelApp';
  // role = 'user';
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = 'My Name';
  }

  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    console.log(componentRef);
    componentRef.instance.title = ' New Room';
  }
}
