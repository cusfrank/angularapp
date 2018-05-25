import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { of } from 'rxjs'；

import { User } from '../model/User'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  data: Observable<any>;


  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;

  currentClasses = {};
  currentStyles = {};
  myRdms: number[];
  myNum: number;

  constructor() { 
    this.myRdms=this.randomIntFromInterval();
    console.log('here');
    
    this.users = [
      {
        firstName: 'Mattew',
        lastName: 'Bred',
        email: 'mattew@email.com',
        image: 'https://picsum.photos/200/200/?random'+this.myRdms[1],
        isActive: true,
        hide: true,
        updateMode: false,
        balance: 22,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Eric',
        lastName: 'Pavinton',
        email: 'eric@email.com',
        image: 'https://picsum.photos/200/200/?random'+this.myRdms[2],
        isActive: false,
        hide: true,
        updateMode: false,
        balance: 18,
        registered: new Date('03/04/2017 08:30:00')
      },
      {
        firstName: 'Jane',
        lastName: 'Field',
        email: 'jane@email.com',
        image:
          'https://picsum.photos/200/200/?random'+this.myRdms[3],
        isActive: true,
        hide: true,
        updateMode: false,
        balance: 19,
        registered: new Date('02/03/2017 08:30:00')
      }
    ];
   }

   getData(){
     this.data = new Observable(observer => {
       setTimeout(()=>{
         observer.next(1);
       },1000);

       setTimeout(()=>{
        observer.next(2);
      },2000);

      setTimeout(()=>{
        observer.next(3);
      },3000);

      setTimeout(()=>{
        observer.next(4);
      },4000);
     });

     return this.data;
   }

   getUsers(): User[]{
     console.log('Fetching users from service...')
     return this.users;
   }

   addUser(user: User){
     this.users.unshift(user);

   }

   randomIntFromInterval() {
    var arr = [];
    while (arr.length < 8) {
      var randomnumber = Math.floor(Math.random() * 1000000000) + 0;
      if (arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
    }
    return arr;
  }
}
