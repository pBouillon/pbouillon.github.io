import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBlockComponent } from './navbar-block.component';

describe('NavbarBlockComponent', () => {
  let component: NavbarBlockComponent;
  let fixture: ComponentFixture<NavbarBlockComponent>;
  let nav: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarBlockComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBlockComponent);
    component = fixture.componentInstance;

    nav = fixture.nativeElement.querySelector('nav');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render as much links as provided', () => {
    const links = [
      { href: '', label: '1', isExternal: false },
      { href: '', label: '2', isExternal: false },
      { href: '', label: '3', isExternal: false },
    ];

    component.links = links;
    fixture.detectChanges();

    const navbarLinks = nav.querySelectorAll('app-navbar-link');

    expect(nav.childElementCount).toBe(links.length);
    expect(navbarLinks.length).toBe(links.length);
  });
});
