import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InsuranceStore } from '../../data/insurance-store.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  readonly store = inject(InsuranceStore);
  readonly policies = [
    { type: 'Auto protection', number: 'AUTO-20841', coverage: '$50,000', renewal: 'Jan 18, 2027', icon: 'A' },
    { type: 'Home protection', number: 'HOME-10492', coverage: '$320,000', renewal: 'Mar 02, 2027', icon: 'H' },
    { type: 'Life protection', number: 'LIFE-55016', coverage: '$250,000', renewal: 'Jun 11, 2027', icon: 'L' }
  ];

  get openClaims(): number {
    return this.store.claims().filter(claim => claim.status !== 'Approved').length;
  }
}
