import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface WeguestCard extends Struct.ComponentSchema {
  collectionName: 'components_weguest_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'file';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    checks: Schema.Attribute.Component<'weguest.check', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WeguestCheck extends Struct.ComponentSchema {
  collectionName: 'components_weguest_checks';
  info: {
    description: '';
    displayName: 'Check';
    icon: 'bulletList';
  };
  attributes: {
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WeguestContentId extends Struct.ComponentSchema {
  collectionName: 'components_weguest_content_ids';
  info: {
    description: '';
    displayName: 'ContentId';
    icon: 'bold';
  };
  attributes: {
    apiType: Schema.Attribute.Enumeration<
      ['title-description-cards-containers', 'banners']
    >;
    contentDocumentId: Schema.Attribute.String;
    populateAttributes: Schema.Attribute.String;
    representation: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'weguest.card': WeguestCard;
      'weguest.check': WeguestCheck;
      'weguest.content-id': WeguestContentId;
    }
  }
}
