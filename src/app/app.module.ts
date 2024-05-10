import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminEntitiesComponent } from './admin-entities/admin-entities.component';
import { InvitationComponent } from './invitation/invitation.component';
import { HospitialteamComponent } from './hospitialteam/hospitialteam.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NotfoundComponent } from './notfound/notfound.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


import { Dialog } from '@angular/cdk/dialog';
import { FormComponent } from './form/form.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { TaskComponent } from './task/task.component';


const routes:Routes=[
  {
    path:'', component:AdminEntitiesComponent
  },
  {
    path:'invitation', component:InvitationComponent
  },
  {
    path:'hospitialteam', component:HospitialteamComponent
  },
  {
    path:'form', component:FormComponent
  },
  {
    path:"paymentform", component:PaymentformComponent
  },
  {
    path:"addmembercomponent", component:AddmemberComponent
  },
  {
    path:"task", component:TaskComponent
  },
  
  {
    path:"**", component:NotfoundComponent
  },

 
]

@NgModule({
  declarations: [
    AppComponent,
    AdminEntitiesComponent,
    InvitationComponent,
    HospitialteamComponent,
    NotfoundComponent,
    FormComponent,
    PaymentformComponent,
    AddmemberComponent,
    TaskComponent,
   
  
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule



  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
