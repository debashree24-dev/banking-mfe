import { Injectable, signal } from '@angular/core';

export type LoanStatus = 'Under review' | 'Approved' | 'Needs documents';

export interface LoanApplication {
  id: number;
  applicant: string;
  amount: number;
  termMonths: number;
  purpose: string;
  status: LoanStatus;
  submittedAt: string;
}

@Injectable({ providedIn: 'root' })
export class LoanStore {
  private readonly applicationsState = signal<LoanApplication[]>([
    {
      id: 1001,
      applicant: 'Avery Johnson',
      amount: 24000,
      termMonths: 48,
      purpose: 'Vehicle',
      status: 'Under review',
      submittedAt: '2026-10-24'
    },
    {
      id: 1002,
      applicant: 'Jordan Lee',
      amount: 8500,
      termMonths: 24,
      purpose: 'Home improvement',
      status: 'Approved',
      submittedAt: '2026-10-22'
    },
    {
      id: 1003,
      applicant: 'Morgan Patel',
      amount: 12000,
      termMonths: 36,
      purpose: 'Debt consolidation',
      status: 'Needs documents',
      submittedAt: '2026-10-20'
    }
  ]);

  readonly applications = this.applicationsState.asReadonly();

  addApplication(application: Omit<LoanApplication, 'id' | 'status' | 'submittedAt'>): void {
    const nextId = Math.max(1000, ...this.applicationsState().map(item => item.id)) + 1;
    this.applicationsState.update(items => [
      {
        ...application,
        id: nextId,
        status: 'Under review',
        submittedAt: new Date().toISOString().slice(0, 10)
      },
      ...items
    ]);
  }

  setStatus(id: number, status: LoanStatus): void {
    this.applicationsState.update(items =>
      items.map(item => item.id === id ? { ...item, status } : item)
    );
  }
}
