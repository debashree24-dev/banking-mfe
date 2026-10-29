import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoanStatus, LoanStore } from '../../data/loan-store.service';

@Component({
  selector: 'app-loan-list',
  standalone: true,
  imports: [CurrencyPipe, FormsModule, RouterLink],
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.css'
})
export class LoanListComponent {
  readonly store = inject(LoanStore);
  statusFilter: LoanStatus | 'All' = 'All';

  get visibleApplications() {
    return this.store.applications().filter(item => this.statusFilter === 'All' || item.status === this.statusFilter);
  }

  setStatus(id: number, status: LoanStatus): void {
    this.store.setStatus(id, status);
  }
}
