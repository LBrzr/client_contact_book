import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-tile',
  templateUrl: './contact-tile.component.html',
  styleUrls: ['./contact-tile.component.scss'],
})
export class ContactTileComponent {
  @Input() contact!: Contact;
}
