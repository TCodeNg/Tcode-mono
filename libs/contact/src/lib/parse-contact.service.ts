import { ContactServiceInterface } from './contact.service';
import { from, Observable, throwError } from 'rxjs';
import * as Parse from 'parse';
import { Injectable } from "@angular/core";

@Injectable()
export class ParseContactService implements ContactServiceInterface {
  deleteContact(userId?: string): Observable<boolean> {
    return throwError(new Error('Method not implemented'));
  }

  getContact(userId: string): Observable<any> {
    return from(ParseContactService._getContact(userId));
  }

  updateContact(payload: any, userId?: string): Observable<boolean> {
    return from(this._updateContact(payload, userId));
  }

  private static async _getContact(userId): Promise<any> {
    const query = new Parse.Query('Contact');
    query.equalTo('userId', userId);
    const contact: Parse.Object = await query.first();
    return contact;
  }

  private async _updateContact(payload: any, userId?: string): Promise<boolean> {
    const _userId = Parse.User.current()?.id ?? userId;
    if (!_userId) {
      return false;
    }

    let contact;

    try {
      contact = await this.getContact(_userId).toPromise();
    } catch (e) {
      console.log(e);
      return false;
    }

    if (!contact) {
      contact = new Parse.Object('Contact');
      contact.set('userId', _userId);
    }

    contact.set('payload', payload);

    try {
      await contact.save();
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
