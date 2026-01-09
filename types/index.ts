export interface ContactInfo {
  phones: {
    main: string;
    classes: string;
    store: string;
    whatsapp: string;
  };
  address: {
    street: string;
    city: string;
    postal: string;
    country: string;
    full: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  email: {
    info: string;
    classes: string;
  };
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  youtube: string;
  whatsappLink: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export interface StoreInfo {
  name: string;
  tagline: string;
  description: string;
}

export interface MapProps {
  center: [number, number];
  zoom: number;
  markerPosition: [number, number];
  popupContent: string;
}
