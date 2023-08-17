import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';
import { translation } from '../app/translation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-simple-translation';
  constructor(private language: LanguageService){
  }


  setToIndo(){
    this.language.setLanguange('id')
  }

  setToEnglish(){
    this.language.setLanguange('en')
  }
  
}
