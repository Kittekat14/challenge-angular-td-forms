import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'forms-template-driven-challenge';

  @ViewChild('form', { static: true }) form: NgForm;

  user = {
    email: '',
    password: '',
    subscription: '',
  };

  defaultSubscription = 'advanced';

  submitted = false;

  onSubmit() {
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    this.user.subscription = this.form.value.subscription;

    this.submitted = true;
  }
}
