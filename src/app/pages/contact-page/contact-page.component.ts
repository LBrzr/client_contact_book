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
    console.log('ContactPageComponent.ngOnInit');
    this.contactService.getAll().subscribe((data: Contact[]) => {
      this.contacts = data;
    });
  }

  setTerm(term: string) {
    this.term = term;
  }

  search() {
    console.log('search', this.term);
  }
}
