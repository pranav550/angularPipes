import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPipes';
  employees:any[]=[
    {code :'emp001', name:'amit', salary:10000,dob:'02/aug/1991'},
    {code :'emp002', name:'akash', salary:10000,dob:'02/aug/1992'},
    {code :'emp003', name:'abhay', salary:10000,dob:'02/aug/1993'},
    {code :'emp004', name:'ajay', salary:10000,dob:'02/aug/1994'},
  ]
}
