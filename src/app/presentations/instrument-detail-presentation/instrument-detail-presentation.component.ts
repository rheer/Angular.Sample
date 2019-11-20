import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { Instrument } from 'src/app/models/instrument.model';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PresentationValidator } from '../presentation.validator';


export interface InstrumentChangesEventArgs {
  instrument: Instrument;
  changeType: InstrumentChangeType;
}

export enum InstrumentChangeType {
  Add,
  Update,
  Delete
}

@Component({
  selector: 'app-instrument-detail-presentation',
  templateUrl: './instrument-detail-presentation.component.html',
  styleUrls: ['./instrument-detail-presentation.component.css']
})
export class InstrumentDetailPresentationComponent implements OnInit, OnChanges {

  @Input() instrument: Instrument;
  @Input() instrumentId: string;
  @Output() instrumentChanges =  new EventEmitter<InstrumentChangesEventArgs>();

  instrumentForm: FormGroup;
  nameControl: AbstractControl;
  tickerControl: AbstractControl;
  idControl: AbstractControl;

  nameValidator: PresentationValidator;
  tickerValidator: PresentationValidator;

  constructor() {
    this.createForm();
  }

  // see transaction-price.component.ts
  ngOnInit() {
    this.setFormValues();
  }

  createForm() {
    this.idControl = new FormControl('');
    this.idControl.disable();
    this.nameControl = new FormControl('');
    this.nameValidator = new PresentationValidator(this.nameControl,[Validators.required]);
    this.nameControl.setValidators(this.nameValidator.validationFunctions);
    this.tickerControl = new FormControl('');
    this.tickerValidator = new PresentationValidator(this.tickerControl,[Validators.required, Validators.minLength(3)]);
    this.tickerControl.setValidators(this.tickerValidator.validationFunctions);
    this.instrumentForm = new FormGroup({
      id: this.idControl,
      name: this.nameControl,
      ticker: this.tickerControl
    });
  }

  setFormValues() {
    if (this.instrument) {
      this.idControl.setValue(this.instrument.id);
      this.nameControl.setValue(this.instrument.name);
      this.tickerControl.setValue(this.instrument.ticker);
    } else {
      this.idControl.setValue(this.instrumentId);
      this.nameControl.setValue('');
      this.tickerControl.setValue('');
    }
  }

  setModelValues() {
    if (this.instrument == null) {
      this.instrument = new Instrument()
    }
    this.instrument.id = this.idControl.value;
    this.instrument.name = this.nameControl.value;
    this.instrument.ticker = this.tickerControl.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //this.instrumentForm.reset();
    this.instrumentForm.markAsUntouched();
    this.instrumentForm.markAsPristine();
    this.setFormValues();
  }

  onSubmit() {
    if (this.instrumentForm.valid) {
      const isNew = this.instrument == null ? true : false;
      this.setModelValues();
      this.instrumentChanges.emit({instrument: this.instrument, changeType: isNew? InstrumentChangeType.Add : InstrumentChangeType.Update });
      this.instrumentForm.markAsPristine();
    }
    
  }

  onRevert() {
    this.instrumentForm.reset(this.instrumentForm.value)
  }
  onDelete() {
    this.setModelValues();
    this.instrumentChanges.emit({instrument: this.instrument, changeType: InstrumentChangeType.Delete})
  }

  get name() { return this.instrumentForm.get('name'); }

}
