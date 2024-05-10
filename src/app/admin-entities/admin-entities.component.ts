import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-entities',
  templateUrl: './admin-entities.component.html',
  styleUrl: './admin-entities.component.css'
})
export class AdminEntitiesComponent implements OnInit {
saveHospital() {
throw new Error('Method not implemented.');
}



Pickuplocation=['Ramnagar', 'Seethammadara', 'Dwaraka Nagar ','Mvp Colony' ]
  
item: any;
dropdownlocation=['gajuwaka', 'malkapuram', 'Dwaraka Nagar ','Murlinagar' ]
items: any;






constructor(private builder:FormBuilder){
  
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    
  }

hospitalform=this.builder.group({
  username:this.builder.control('',Validators.required), 
  name:this.builder.control('',Validators.required), 
  mobilenumber:this.builder.control('',Validators.required),
  pickuplocation:this.builder.control('',Validators.required),
  dropdownlocation:this.builder.control('',Validators.required),
  chooseadateincalender:this.builder.control(null,Validators.required),
  description:this.builder.control('',Validators.required),
  status:this.builder.control(false),
});

show(){
  console.log(this.hospitalform. value)
}

dateChanged($event: { target: { value: any; }; }) {
  console.log($event.target.value);
}
}
