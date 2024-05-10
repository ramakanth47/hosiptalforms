import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hospitialteam',
  templateUrl: './hospitialteam.component.html',
  styleUrl: './hospitialteam.component.css'
})
export class HospitialteamComponent {
  saveHospital() {
    throw new Error('Method not implemented.');
    }
    
    
    
   Selecttasktype=['anaesthetics', 'emergency medicines', 'general medicine ','obstetrics and gynaecology', 'pathology' ]
      
    item: any;
    dropdownlocation=['gajuwaka', 'malkapuram', 'Dwaraka Nagar ','Murlinagar' ]
    items: any;
    labtestpickup=['Thyroid function tests', 'blood count', 'blood count', 'Blood glucose test']
    items1:any;
    AvailbleTime=['6am-9am', '9am-12am','12am-4pm']
    item2:any;
    
    
    
    
    constructor(private builder:FormBuilder){
      
    }
      ngOnInit(): void {
        throw new Error('Method not implemented.');
        
      }
    
    hospitalform=this.builder.group({
      patientname:this.builder.control('',Validators.required), 
      contactnumber:this.builder.control('',Validators.required),
      selecttasktype:this.builder.control('',Validators.required),
      dropdownlocation:this.builder.control('',Validators.required),
      labtestpickup:this.builder.control(null,Validators.required),
      availbletime:this.builder.control('',Validators.required),
      appointmentdate:this.builder.control('',Validators.required),
      appointmenttime:this.builder.control('',Validators.required),
      status:this.builder.control(false),
    });
    
    show(){
      console.log(this.hospitalform. value)
    }
    
    dateChanged($event: { target: { value: any; }; }) {
      console.log($event.target.value);
    }
    }

