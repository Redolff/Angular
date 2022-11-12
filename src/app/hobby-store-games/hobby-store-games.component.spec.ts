import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyStoreGamesComponent } from './hobby-store-games.component';

describe('HobbyStoreGamesComponent', () => {
  let component: HobbyStoreGamesComponent;
  let fixture: ComponentFixture<HobbyStoreGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbyStoreGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbyStoreGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
