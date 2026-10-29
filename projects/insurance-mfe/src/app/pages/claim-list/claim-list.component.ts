import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClaimStatus, InsuranceStore } from '../../data/insurance-store.service';

@Component({
  selector: 'app-claim-list',
  standalone: true,
  imports: [CurrencyPipe, FormsModule, RouterLink],
  templateUrl: './claim-list.component.html',
  styleUrl: './claim-list.component.css'
})
export class ClaimListComponent {
  readonly store = inject(InsuranceStore);
  claimType = 'Auto';
  description = '';
  amount: number | null = null;
  incidentDate = '';
  submitted = false;
  validationError = false;

  fileClaim(form: NgForm): void {
    const description = this.description.trim();
    if (form.invalid || description.length < 4 || this.amount === null || this.amount < 1) {
      form.control.markAllAsTouched();
      this.validationError = true;
      return;
    }

    const policyNumber = this.claimType === 'Home' ? 'HOME-10492' : this.claimType === 'Life' ? 'LIFE-55016' : 'AUTO-20841';
    this.store.addClaim({
      type: this.claimType,
      policyNumber,
      description,
      amount: this.amount,
      incidentDate: this.incidentDate
    });
    this.submitted = true;
    this.validationError = false;
    form.resetForm({ claimType: 'Auto', description: '', amount: null, incidentDate: '' });
  }

  setStatus(id: number, status: ClaimStatus): void {
    this.store.setStatus(id, status);
  }
}
