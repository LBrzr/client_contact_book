import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  contacts: Contact[] = [];
  term: string = '';

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.fetchContacts();
  }

  fetchContacts() {
    this.contactService.getAll().subscribe(this.setContacts.bind(this));
  }

  setTerm(term: string) {
    this.term = term;
    if (this.term.length === 0) {
      this.fetchContacts();
    }
  }

  setContacts(data: Contact[]) {
    console.log('Got ', data.length, ' contacts');
    console.log(data);
    this.contacts = data;
  }

  search() {
    if (this.term.length > 0) {
      this.contactService
        .filter(this.term)
        .subscribe(this.setContacts.bind(this));
    }
  }

  showDetails(contact: Contact) {
    console.log('showDetails', contact);
  }
}
