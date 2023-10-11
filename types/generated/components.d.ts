import type { Schema, Attribute } from '@strapi/strapi';

export interface UnknowncategoyCustomComponent extends Schema.Component {
  collectionName: 'components_unknowncategoy_custom_components';
  info: {
    displayName: 'Custom component';
    icon: 'briefcase';
  };
  attributes: {};
}

export interface UnknowncategoyDontknow extends Schema.Component {
  collectionName: 'components_unknowncategoy_dontknows';
  info: {
    displayName: 'dontknow';
    icon: 'arrowLeft';
    description: '';
  };
  attributes: {
    Description: Attribute.RichText;
    Title: Attribute.String;
    custom: Attribute.Component<'unknowncategoy.custom-component', true>;
  };
}

export interface UnknowncategoyZone extends Schema.Component {
  collectionName: 'components_unknowncategoy_zones';
  info: {
    displayName: 'Zone';
  };
  attributes: {
    email: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'unknowncategoy.custom-component': UnknowncategoyCustomComponent;
      'unknowncategoy.dontknow': UnknowncategoyDontknow;
      'unknowncategoy.zone': UnknowncategoyZone;
    }
  }
}
