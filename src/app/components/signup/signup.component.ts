import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

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

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  onSignin(form:NgForm){

  this.http.post('https://www.pikreview.com/rest/user.php?f=register',
  JSON.stringify({      
		email: form.value.email, 
		password:form.value.password,
		confirmPassword:form.value.cpassword,
		firstName: form.value.fname,
		lastName   :form.value.lname,
		contactNo  :form.value.contact,
		instagramId:form.value.InstagramId

		})
  ).subscribe(res=>{
  console.log(res);
  },error=>{
  console.log("something wrong");
  });
  
  }

}