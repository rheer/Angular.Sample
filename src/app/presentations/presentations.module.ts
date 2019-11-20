import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentListPresentationComponent } from './instrument-list-presentation/instrument-list-presentation.component';
import { DxDataGridModule, DxMenuModule, DxTextBoxModule, DxNumberBoxModule, DxValidatorModule } from 'devextreme-angular';
import { InstrumentDetailPresentationComponent } from './instrument-detail-presentation/instrument-detail-presentation.component';
import { TopMenuPresentationComponent } from './top-menu-presentation/top-menu-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TradeListPresentationComponent } from './trade-list-presentation/trade-list-presentation.component';
@NgModule({
  imports: [
    CommonModule,
    DxDataGridModule,
    DxMenuModule,
    DxNumberBoxModule,
    DxTextBoxModule,
    DxValidatorModule,
    ReactiveFormsModule
  ],
  declarations: [
    InstrumentListPresentationComponent,
    InstrumentDetailPresentationComponent,
    TopMenuPresentationComponent,
    TradeListPresentationComponent
  ],
  exports: [
    InstrumentListPresentationComponent,
    InstrumentDetailPresentationComponent,
    TopMenuPresentationComponent,
    TradeListPresentationComponent
   ]
})
export class PresentationsModule { }
