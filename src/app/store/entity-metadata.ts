import { EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    instrument: {},
    trade: {}
}

const pluralNames = {
    instrument: 'instrument',
    trade: 'trade'
}


export const entityConfig = {
    entityMetadata,
    pluralNames
}