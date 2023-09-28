import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'hotelApp-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(EmployeesComponent) employees!: EmployeesComponent;
  ngAfterContentInit(): void {
    console.log(this.employees);
  }
}
