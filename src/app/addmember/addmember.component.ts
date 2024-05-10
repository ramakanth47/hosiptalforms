import { Component,  } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrl: './addmember.component.css'
})
export class AddmemberComponent   {
  
  name = 'Angular';  
    
  productForm: FormGroup;  
     
  constructor(private fb:FormBuilder) {  
     
    this.productForm = this.fb.group({  
      name: '',  
      users: this.fb.array([]) ,  
    });  
  }  
    
  users() : FormArray {  
    return this.productForm.get("users") as FormArray  
  }  
     
  newUser(): FormGroup {  
    return this.fb.group({  
      name: '',  
      mobilenumber: '',  
      usertypepassword: '',
    })  
  }  
     
  addUser() {  
    this.users().push(this.newUser());  
  }  
     
  removeUser(i:number) {  
    this.users().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.productForm.value);  
  }
}
