import { Injectable, signal } from '@angular/core';

export type ClaimStatus = 'Submitted' | 'In review' | 'Approved';

export interface InsuranceClaim {
  id: number;
  type: string;
  policyNumber: string;
  description: string;
  amount: number;
  incidentDate: string;
  status: ClaimStatus;
  submittedAt: string;
}

@Injectable({ providedIn: 'root' })
export class InsuranceStore {
  private readonly claimsState = signal<InsuranceClaim[]>([
    {
      id: 7001,
      type: 'Auto',
      policyNumber: 'AUTO-20841',
      description: 'Rear bumper repair',
      amount: 1850,
      incidentDate: '2026-10-12',
      status: 'In review',
      submittedAt: '2026-10-14'
    },
    {
      id: 7002,
      type: 'Home',
      policyNumber: 'HOME-10492',
      description: 'Storm damage assessment',
      amount: 4200,
      incidentDate: '2026-10-05',
      status: 'Submitted',
      submittedAt: '2026-10-08'
    },
    {
      id: 7003,
      type: 'Auto',
      policyNumber: 'AUTO-20841',
      description: 'Windshield replacement',
      amount: 640,
      incidentDate: '2026-09-18',
      status: 'Approved',
      submittedAt: '2026-09-20'
    }
  ]);

  readonly claims = this.claimsState.asReadonly();

  addClaim(claim: Omit<InsuranceClaim, 'id' | 'status' | 'submittedAt' | 'policyNumber'> & { policyNumber: string }): void {
    const nextId = Math.max(7000, ...this.claimsState().map(item => item.id)) + 1;
    this.claimsState.update(items => [
      {
        ...claim,
        id: nextId,
        status: 'Submitted',
        submittedAt: new Date().toISOString().slice(0, 10)
      },
      ...items
    ]);
  }

  setStatus(id: number, status: ClaimStatus): void {
    this.claimsState.update(items =>
      items.map(item => item.id === id ? { ...item, status } : item)
    );
  }
}
