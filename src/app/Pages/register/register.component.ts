import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],

      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      ]],

      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\\d).+$/)  
      ]],

      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordMatch });
  }

  // Custom validator to match passwords
  passwordMatch(control: AbstractControl) {
    return control.get('password')?.value === control.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  // API call
  onSubmit() {
    if (this.registerForm.invalid) return;

    this.loading = true;

    this.http.post('https://ecommerce.routemisr.com/api/v1/auth/signup', this.registerForm.value)
      .subscribe({
        next: (res) => {
          alert('Registered Successfully!');
          this.loading = false;
        },
        error: (err) => {
          alert(err?.error?.message || 'Something went wrong');
          this.loading = false;
        }
      });
  }

  get f() {
    return this.registerForm.controls;
  }
}
