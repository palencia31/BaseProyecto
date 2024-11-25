import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  @ViewChild('nb-global-spinner') myElement: ElementRef; 

  constructor(){

  }
  ngOnInit(): void {
    console.log("test uinici")
    this.myElement.nativeElement.style.display = 'none';
  }

  redirigir(){

  }
}
