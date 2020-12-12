import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT_SERVICE_TOKEN } from './contact.service';
import { ParseContactService } from './parse-contact.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: CONTACT_SERVICE_TOKEN,
      useClass: ParseContactService
    }
  ]
})
export class ContactModule {}
