import { Component, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Instrument } from 'src/app/models/instrument.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-instrument-list-presentation',
  templateUrl: './instrument-list-presentation.component.html',
  styleUrls: ['./instrument-list-presentation.component.css']
})
export class InstrumentListPresentationComponent implements OnInit, OnChanges {


  @Input() instruments: Instrument[];
  @Output() private selectedId = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const x = changes;
    //throw new Error('Method not implemented.');
  }

  public onFocusedRowChanged($event: any): void {
    if ($event.row !== undefined && $event.row.key !== undefined) {
      this.selectedId.emit($event.row.key);
    }
  }

}
