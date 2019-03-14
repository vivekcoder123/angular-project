import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
email:String;
confirmPassword:String;
FirstName:String;
LastName:String;
contactNo:String;
instagramId:string;

  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit() {
  }
  onSignUp(form:NgForm){
  this.http.post('https://www.pikreview.com/rest/user.php?f=register',
  JSON.stringify({      
		email: form.value.email, 
		password:form.value.password,
		confirmPassword:form.value.confirmPassword,
		firstName: form.value.firstName,
		lastName   :form.value.lastName,
		contactNo  :form.value.contact,
		instagramId:form.value.instagramId
		})
  ).subscribe(res=>{
  console.log(res);
      this.toastr.success(res.statusText, 'Congratulations!');
      $("#resetButton").trigger("click");
  },error=>{
  console.log(error);
      this.toastr.error(error.statusText, 'Error!');
  });
  
  }

}