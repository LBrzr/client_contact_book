import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent {
  routeSub?: Subscription;
  contact?: Contact;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state?.['contact']) {
      this.contact = state['contact'];
      console.log('got ', this.contact);
    } else {
      this.routeSub = this.route.params.subscribe((params) => {
        this.contactService.getById(params['id']).subscribe((contact) => {
          this.contact = contact;
          console.log('feteched ', this.contact);
        });
      });
    }
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  editing: boolean = false;

  edit() {
    this.editing = !this.editing;
    // console.log('editing: ' + this.editing);
  }

  update(newContact: Contact) {
    this.contactService
      .update(this.contact!, newContact)
      .subscribe((contact) => {
        this.contact = contact;
        this.editing = false;
      });
  }
}
