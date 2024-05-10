import { Component  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrl: './paymentform.component.css'
})
export class PaymentformComponent {
 
 paymentmethod=['Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer']


  constructor(private builder:FormBuilder){
    
  }
  

  paymentform=this.builder.group({
    paymentmethod:this.builder.control('',Validators.required), 
    cardnumber:this.builder.control('',Validators. required,  ),
    expirydate:this.builder.control('',Validators.required, ),
    cvv:this.builder.control('',Validators.required, ),
    cardholdername:this.builder.control('',Validators.required, ),
    country:this.builder.control('',Validators.required, ),
    billingaddress:this.builder.control('',Validators.required, ),
    phonenumber:this.builder.control('',Validators.required, ),
    state:this.builder.control('',Validators.required, ),
    postalcode:this.builder.control('',Validators.required, ),
    amount:this.builder.control('',Validators.required, ),
    description:this.builder.control('',Validators.required, ),

  })

  show(){
    console.log(this.paymentform. value)
  }

}
