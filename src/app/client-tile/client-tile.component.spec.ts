import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTileComponent } from './client-tile.component';

describe('ClientTileComponent', () => {
  let component: ClientTileComponent;
  let fixture: ComponentFixture<ClientTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
