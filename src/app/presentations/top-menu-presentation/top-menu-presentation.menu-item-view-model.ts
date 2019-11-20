import { UUID } from 'angular2-uuid';

export enum MenuCommand {
    Instrument,
    NewInstrument,
    Home,
    About

}

export class TopMenuPresentationComponentMenuItemViewModel {

    constructor(
        private id: string,
        private name: string,
        private command: MenuCommand,
        private icon?: string,
        private disabled?: boolean,
        private items?: TopMenuPresentationComponentMenuItemViewModel[]
    ) {}


    get url(): string {
        switch(this.command) {
            case MenuCommand.Instrument: return 'instrument'
            case MenuCommand.NewInstrument: return `instrument/${UUID.UUID()}`
            case MenuCommand.About: return 'about'
            defualt: return ''
        }
    }
}

