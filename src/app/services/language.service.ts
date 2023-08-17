import { EventEmitter, Injectable } from '@angular/core';
import { translation } from '../translation';
  

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  changeDetectionEmitter = new EventEmitter();
  constructor() {
  }

  setLanguange(key: string){
    let object: string | any = translation[key as keyof typeof translation]
    return this.changeDetectionEmitter.emit(object)
  }

  
}
