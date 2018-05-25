import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService} from '../../services/data.service';
import { User } from '../../model/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  currentClasses = {};
  currentStyles = {};
  myRdms: number[];
  myNum: number;
  data:any;

  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data =>{
      console.log(data);
    })

    this.users = this.dataService.getUsers();

    setTimeout(() => {
    
      this.loaded = true;
    }, 1000);


    //this.showExtended = true;

    // this.addUser({
    //   firstName:'Diana',
    //   lastName:'Lee',
    //   age:28,
    //   address:{
    //     street:'76 Edward',
    //     city:'Oakville',
    //     state:'ON'
    //   },
    //   image: 'https://picsum.photos/200/200/?random+3',
    //   isActive:true,
    //   hide:true,
    //   balance:200
    // }); 
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.user.image =
  //   'https://picsum.photos/200/200/?random';
  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   };

  // }
  removeUser(index: number) {
    this.users.splice(index, 1);
  }
  updateUser(index) {
    this.users[index].updateMode = !this.users[index].updateMode;
    console.log(this.users[index].updateMode);
  }
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      //'big-text': this.showExtended
    }
  }
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.user.hide? '0' : '60px',
      'font-size': this.user.hide? '0' : '40px'
    }
  }
  fireEvent(e) {
    console.log(e.target.value);
    console.log(e.type);
  }
  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      this.myNum=this.randomInt(this.myRdms);
      value.image =
    'https://picsum.photos/200/200/?random'+this.myNum;
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.dataService.addUser(value);

      this.form.reset();
    }

  }

  
  randomInt(arr=[]) {
    var myNum=-1;
    while (myNum==-1) {
      var myNum = Math.floor(Math.random() * 1000000000) + 0;
      if (arr.indexOf(arr) > -1) continue;
    }
    return myNum;
  }
}