import { Component, OnInit } from '@angular/core';
import { TopMenuPresentationComponentMenuItemViewModel, MenuCommand } from './top-menu-presentation.menu-item-view-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu-presentation',
  templateUrl: './top-menu-presentation.component.html',
  styleUrls: ['./top-menu-presentation.component.css']
})
export class TopMenuPresentationComponent implements OnInit {

  menuItems: TopMenuPresentationComponentMenuItemViewModel[];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.menuItems = [
      new TopMenuPresentationComponentMenuItemViewModel('1', 'Home', MenuCommand.Home, 'home'),
      new TopMenuPresentationComponentMenuItemViewModel('2', 'About', MenuCommand.About, 'help'),
      new TopMenuPresentationComponentMenuItemViewModel('3', 'Instruments', MenuCommand.Instrument, undefined, undefined, [
        new TopMenuPresentationComponentMenuItemViewModel('4', 'New', MenuCommand.NewInstrument)])
    ];
  }

  onNavigate($event: any) {

    if ($event.itemData instanceof TopMenuPresentationComponentMenuItemViewModel) {
      this.router.navigate([ ($event.itemData.url)]);
    }
  }

}
