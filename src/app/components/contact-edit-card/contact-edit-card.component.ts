import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-edit-card',
  templateUrl: './contact-edit-card.component.html',
  styleUrls: ['./contact-edit-card.component.scss'],
})
export class ContactEditCardComponent {
  @Input() contact!: Contact;
  @Input() onSave!: (contact: Contact) => void;
  @Input() onCancel!: () => void;
  newContact?: Contact;

  ngOnInit() {
    this.newContact = Contact.empty(this.contact.id);
  }
}
