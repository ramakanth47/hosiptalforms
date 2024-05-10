import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
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
      pickup: '',  
      drop: '',  
      appointmentbooking: '',
      taskassinged: '',
      taskaccepted: '',
      taskcompleted: '',
      paymentwaiting: '',
      paymentcompleted: '',
      paymentrejected: '',
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
