import { EventEmitter, Injectable } from '@angular/core';
import { translation } from '../translation';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  changeDetectionEmitter = new EventEmitter<any>();
  constructor() {
  }

  get defaultBrowserLanguage() {
    return navigator.language
  }

  get translation() {
    return translation
  }

  
}
