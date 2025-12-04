import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  userform!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.userform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm() {
    if (this.userform.invalid) return;

    const body = this.userform.value;

    this.http.post('https://notes-mrp9.onrender.com/signin', body).subscribe({
      next: (res: any) => {
        console.log("API Success:", res);

        if (res.token) {
          alert("Login Successful!");
          localStorage.setItem("userToken", res.token);
        } else {
          alert("Unexpected response from server");
        }
      },
      error: (err) => {
        console.error("API Error:", err);
        alert(err.error?.message || "Login failed");
      }
    });
  }

  get f() {
    return this.userform.controls;
  }
}
