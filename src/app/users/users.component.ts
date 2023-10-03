import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private R:Router){}

  goToAdd(){
    this.R.navigate(["users/addUser"]);
  }
  goToEdit(x:number){
    this.R.navigate(["users/editUser",x]);
  }
}
