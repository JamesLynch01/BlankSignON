import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {

  formSubmit: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    
    this.formSubmit = this.formBuilder.group({
    inputName: ['', Validators.required],
    inputBook: ['', Validators.required],
    inputEmail: ['', Validators.email],
    inputHobbies: ['', Validators.required],
    inputMovies: ['', Validators.required],
    inputJob: ['', Validators.required],
    inputBank: ['', Validators.required],
    })
  }

  
  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.formSubmit.value);
  }
}
