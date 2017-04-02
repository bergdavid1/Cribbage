import { TestBed, async } from '@angular/core/testing';

import {NavbarComponent} from "./navbar";

describe('NavbarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent
      ],
    }).compileComponents();
  }));

  it('should add', () => {
    expect(2+2).toBe(4)
  });

  it('should create the navbar', async(() => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(NavbarComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));
  //
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(NavbarComponent );
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
