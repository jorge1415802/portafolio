import { computed, effect, Injectable, signal } from '@angular/core';
import { Language } from './translate.enum';
import { dictionary } from './dictionary';

@Injectable({
  providedIn: 'root',
})
export class Translate {
  constructor() {
    effect(() => {
      console.log('Current language:', this.currentlanguage());
    });
  }
  currentlanguage = signal<Language>(Language.ES);
  current = computed(() => dictionary[this.currentlanguage()]);
  toggleLanguage() {
    this.currentlanguage.set(
      this.currentlanguage() === Language.ES ? Language.EN : Language.ES
    );
  }
}
