import { Component, OnInit,Input } from '@angular/core';
import {UserService} from '../user.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  userModel;
  showVar;
  @Input() showMe: boolean;
  constructor( private service:UserService,private router: Router  ) { }

  ngOnInit(): void {
  }
  onsubmit(data) {
   console.log(data);
   this.service.add(data)
   .subscribe(data=>  this.router.navigate(['']),
   error =>
   console.log(error)
  ) ;this. router.navigate(['/']);
  
  

   
 }

}
