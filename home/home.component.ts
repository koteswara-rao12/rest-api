import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  showVar: boolean = false;
  show: boolean = false;


    toggleChild(){
        this.showVar = !this.showVar;
      
    }

    toggleadd(){
     
      this.show=!this.show;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
