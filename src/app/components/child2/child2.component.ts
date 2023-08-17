import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { translation } from '../../translation'

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
word = translation.en
  constructor(private language: LanguageService){

  }

  ngOnInit(){
        this.language.changeDetectionEmitter.subscribe( (x) => {
      console.log(x);
      this.word = x
    })
  }

}
