import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/app/models/Card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()data: Card[] = [];
  @Input()btnName: string = "";
  @Output() likeClick : EventEmitter<number> = new EventEmitter<number>();
  @Output() cardClick : EventEmitter<number> = new EventEmitter<number>();
  @Output() addClick : EventEmitter<Card> = new EventEmitter<Card>();

  constructor() { }

  onLikeClicked(id:number){
    this.likeClick.emit(id);
  }

  onCardClick(id:number){
    this.cardClick.emit(id);
  }

  onAddClick(card: Card){
    this.addClick.emit(card);
  }
}
