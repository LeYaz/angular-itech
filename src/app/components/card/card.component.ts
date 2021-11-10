import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/app/models/Card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()data: Card[] = [];
  @Output() likeClick : EventEmitter<number> = new EventEmitter<number>()
  @Output() cardClick : EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  onLikeClicked(id:number){
    this.likeClick.emit(id);
  }

  onCardClick(id:number){
    this.cardClick.emit(id);
  }
}
