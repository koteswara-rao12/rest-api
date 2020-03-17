import { Component, OnInit ,Input} from '@angular/core';
import{ UserService} from '../user.service';
import {User} from '../user';
import {Router} from '@angular/router';

import { from } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 
array:User[];
  user:User[];
  id: number;
  @Input() showMePartially: boolean;

  constructor(private router: Router,private service:UserService ) { }

  ngOnInit() {
    this.service.getdata()
      .subscribe((data) => {
this.user = data;
console.log("this is get data");
console.log(this.user);
    });
  }
  delete(user:User):void{
   
    console.log(user.id);
    this.service.deleteuser(user.id)
    .subscribe(data => {
      console.log(data);


    }); this. router.navigate(['/home']);
  }
  edit(user: User) {
    this.id = user.id;
    this.router.navigate(['edit/' + this.id]);



  }

}
