import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  baseUrl:string='http://localhost:8080/app/user';

  mobileForm = new FormGroup({
      brand: new FormControl('',[]),
      color: new FormControl('',[]),
      model: new FormControl('',[]),
      memory: new FormControl('',[]),
      storage: new FormControl('',[])
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  checkBtnOnHandle():void{
    if (!this.mobileForm.invalid) {
      let options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
      this.http.post(
        this.baseUrl,
        JSON.stringify(
          {
            brand: this.mobileForm.value.brand,
            color: this.mobileForm.value.color,
            model: this.mobileForm.value.model,
            memory: this.mobileForm.value.memory,
            storage: this.mobileForm.value.storage,
          }
          ),
          options).subscribe(
            (response:any) => {
  
            },
            error => {
              console.error('Error submitting form data:', error);
            }
        );
  
        console.log(this.mobileForm.value.brand,
          this.mobileForm.value.color,
          this.mobileForm.value.model,
          this.mobileForm.value.memory,
          this.mobileForm.value.storage,)
    }
    
  }
  resetBtnOnHandle():void{
    this.mobileForm.reset(
      {
        brand :'',
        model : '',
        color : '',
        memory : '',
        storage : ''
      }
    )
  }
}
