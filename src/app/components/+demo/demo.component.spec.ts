import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoComponent } from './';

let comp: DemoComponent;
let fixture: ComponentFixture<DemoComponent>;
let de: DebugElement;
let el: HTMLElement;

describe('DemoComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoComponent ]
    });

    fixture = TestBed.createComponent(DemoComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should have the right h2 font size', () => {
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
    let styles = window.getComputedStyle(el);
    expect(de).not.toBeNull();
    expect(styles.fontSize).toEqual('24px');
  });

  it('Should have the right h3 font size', () => {
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
    let styles = window.getComputedStyle(el);
    expect(de).not.toBeNull();
    expect(styles.fontSize).toEqual('18,72px');
  });

});


