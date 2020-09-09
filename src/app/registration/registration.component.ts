import { Component, OnInit } from '@angular/core';

import {Registration} from '../../registeration'

import {RegistrationService} from '../registration.service'

import {Router, RouterModule} from '@angular/router'
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})



export class RegistrationComponent implements OnInit {

  registration : Registration = new Registration();
  submitted = false ;



  
  

  constructor(private registrationService : RegistrationService) { }

  private router : Router ;



  newRegistration() : void {
    this.submitted = false;
    this.registration = new Registration();
  }

  save()
  {
    this.registrationService.createRegister(this.registration).subscribe(data =>{
      console.log(data)
this.registration = new Registration();
this.gotoDetails();

    },
    error => console.log(error));

  }
  onSubmit(){
  this.submitted = true;
  this.save();
  }
  

  ngOnInit(): void {
  }

  gotoDetails(){
this.router.navigate(['details']);
  }

}
