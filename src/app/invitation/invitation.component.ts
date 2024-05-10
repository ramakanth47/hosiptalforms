import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrl: './invitation.component.css',
  
})
export class InvitationComponent  implements OnInit{
 

RoleTypes=['PG Doctors', 'Hospitals', 'Dwaraka Nagar ','Hospital Manager' ]
item: any;
  constructor(private builder:FormBuilder, dialog:MatDialog){
    
  }
 
  ngOnInit(): void {
    
   
    throw new Error('Method not implemented.');
  }

  invitationform=this.builder.group({
    
    mobilenumber:this.builder.control('',Validators.required),
    uniqueidforinvitation:this.builder.control('',Validators.required),
    roletypes:this.builder.control('',Validators.required),
    status:this.builder.control(false),
  });
  show(){
    console.log(this.invitationform. value)
   
  }
}

