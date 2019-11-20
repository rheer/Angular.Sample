import { Component, Input  } from '@angular/core';
import { Trade } from 'src/app/models/trade.model';

@Component({
  selector: 'app-trade-list-presentation',
  templateUrl: './trade-list-presentation.component.html',
  styleUrls: ['./trade-list-presentation.component.css']
})
export class TradeListPresentationComponent {

  @Input() trades: Trade[];

  constructor() { }

}
