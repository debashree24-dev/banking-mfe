import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoanStore } from '../../data/loan-store.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CurrencyPipe, FormsModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  readonly store = inject(LoanStore);
  applicant = '';
  amount: number | null = null;
  termMonths: number | null = 36;
  purpose = 'Personal loan';
  submitted = false;
  validationError = false;

  get applicationsUnderReview(): number {
    return this.store.applications().filter(item => item.status === 'Under review').length;
  }

  get approvedAmount(): number {
    return this.store.applications()
      .filter(item => item.status === 'Approved')
      .reduce((total, item) => total + item.amount, 0);
  }

  apply(form: NgForm): void {
    const applicant = this.applicant.trim();
    if (form.invalid || applicant.length < 2 || this.amount === null || this.termMonths === null) {
      form.control.markAllAsTouched();
      this.validationError = true;
      return;
    }

    this.store.addApplication({
      applicant,
      amount: this.amount,
      termMonths: this.termMonths,
      purpose: this.purpose
    });
    this.submitted = true;
    this.validationError = false;
    form.resetForm({ applicant: '', amount: null, purpose: 'Personal loan', termMonths: 36 });
  }
}
