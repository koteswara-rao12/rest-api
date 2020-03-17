
import { Component, OnInit ,Input} from '@angular/core';
import{ UserService} from '../user.service';
import {User} from '../user';
import {Router,ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms';

import { from } from 'rxjs';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user:User[];
  id;
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router ,private routes: ActivatedRoute ,private service:UserService) { }

  ngOnInit(): void { const routeParams = this.routes.snapshot.params;
    console.log(routeParams.id);
   

    this.addForm = this.formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      age: [''],
      location: [''],
      

    });

    this.service.getId(routeParams.id)
    .subscribe((data:any) => {
      this.user = data;
      console.log("this is edit");
      console.log(this.user[0]);
      this.addForm.patchValue(this.user[0]);
    });
  }
  update() {
   //console.log('Update');'
   console.log("this is from");
    console.log(this.addForm.value);

    this.service.update1(this.addForm.value,this.addForm.value.id).subscribe(() => {
    
   }, error => {
     
   }); this. router.navigate(['/']);
 }
  
}
