import { group } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // servers = [
  //   {
  //     instanceType: 'mediem',
  //     name: 'Production',
  //     status: 'offline',
  //     started: new Date(15, 1, 2024),
  //   },
  //   {
  //     instanceType: 'large',
  //     name: 'User Database',
  //     status: 'stable',
  //     started: new Date(15, 1, 2024),
  //   },
  //   {
  //     instanceType: 'small',
  //     name: 'development server',
  //     status: 'offline',
  //     started: new Date(15, 1, 2024),
  //   },
  //   {
  //     instanceType: 'small',
  //     name: 'Enviorment Server',
  //     status: 'stable',
  //     started: new Date(15, 1, 2024),
  //   },
  // ];
  // filterStatus: string = '';
  // getStatusClasses(server: {
  //   instanceType: string;
  //   name: string;
  //   status: string;
  //   started: Date;
  // }) {
  //   return {
  //     'list-group-item-success': server.status === 'stable',
  //     'list-group-item-warning': server.status === 'offline',
  //     'list-group-item-danger': server.status === 'critical',
  //   };
  // }
}
