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
    mail: '',
    password: '',
    subscription: '',
  };

  defaultSubscription = 'advanced';

  onSubmit() {
    console.log(this.form);
  }
}
