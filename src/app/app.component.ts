import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 x=-2 ;
 couleur="blue";
 val1=false;
 val2=true;
list=[1,2,3]

 url="https://i.natgeofe.com/k/9acd2bad-fb0e-43a8-935d-ec0aefc60c2f/monarch-butterfly-grass_4x3.jpg"

 f(){
  alert("ok")
 }

 getColor(){
  if(this.x>0){
    return "blue";
  }
  else
  return "red";
 }

}
