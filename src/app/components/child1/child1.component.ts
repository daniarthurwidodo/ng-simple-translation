import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { translation } from '../../translation'

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
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
