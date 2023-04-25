import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-client-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  filtered_contacts: Contact[] = [];
  contacts: Contact[] = [];

  term: string = '';

  setTerm(term: string) {
    this.term = term;
  }

  search() {
    console.log('search', this.term);
  }
}
