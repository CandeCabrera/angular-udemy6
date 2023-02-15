import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') loginForm: NgForm;
  submitted = false
  user:any;

  onSubmit(){
    this.submitted = true
    this.user = this.loginForm.value.userData
    this.loginForm.reset()
    console.log(this.user);
    
  }
}
