import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';

export interface ContactServiceInterface {
  updateContact(payload: any): Observable<boolean>;
  getContact(userId?: string): Observable<any>;
  deleteContact(userId?: string): Observable<boolean>;
}

export type ContactService = ContactServiceInterface;

export const CONTACT_SERVICE_TOKEN = new InjectionToken<ContactService>('CONTACT_SERVICE_TOKEN');
