// Centralized environment variables with runtime validation
// This ensures type safety and provides helpful error messages

const requiredEnvVars = [
  'NEXT_PUBLIC_STORE_NAME',
  'NEXT_PUBLIC_STORE_TAGLINE',
  'NEXT_PUBLIC_STORE_DESCRIPTION',
  'NEXT_PUBLIC_CONTACT_PHONE_MAIN',
  'NEXT_PUBLIC_CONTACT_PHONE_CLASSES',
  'NEXT_PUBLIC_CONTACT_PHONE_STORE',
  'NEXT_PUBLIC_CONTACT_WHATSAPP',
  'NEXT_PUBLIC_CONTACT_ADDRESS_STREET',
  'NEXT_PUBLIC_CONTACT_ADDRESS_CITY',
  'NEXT_PUBLIC_CONTACT_ADDRESS_POSTAL',
  'NEXT_PUBLIC_CONTACT_ADDRESS_COUNTRY',
  'NEXT_PUBLIC_CONTACT_LATITUDE',
  'NEXT_PUBLIC_CONTACT_LONGITUDE',
  'NEXT_PUBLIC_CONTACT_EMAIL_INFO',
  'NEXT_PUBLIC_CONTACT_EMAIL_CLASSES',
  'NEXT_PUBLIC_SOCIAL_INSTAGRAM',
  'NEXT_PUBLIC_SOCIAL_FACEBOOK',
  'NEXT_PUBLIC_SOCIAL_YOUTUBE',
  'NEXT_PUBLIC_SOCIAL_WHATSAPP_LINK',
  'NEXT_PUBLIC_CLASSES_SCHEDULE_INFO',
  'NEXT_PUBLIC_CLASSES_DESCRIPTION',
  'NEXT_PUBLIC_STORE_PRODUCTS_INFO',
  'NEXT_PUBLIC_GOOGLE_MAPS_DIRECTIONS_URL',
] as const;

function validateEnv() {
  // Skip validation in browser environment
  if (typeof window !== 'undefined') {
    return;
  }

  const missing = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Please check your .env.local file against .env.example'
    );
  }
}

// Run validation at build time (server-side only)
if (process.env.NODE_ENV !== 'test') {
  validateEnv();
}

// Type-safe environment variable accessors
export const env = {
  store: {
    name: process.env.NEXT_PUBLIC_STORE_NAME!,
    tagline: process.env.NEXT_PUBLIC_STORE_TAGLINE!,
    description: process.env.NEXT_PUBLIC_STORE_DESCRIPTION!,
  },
  contact: {
    phones: {
      main: process.env.NEXT_PUBLIC_CONTACT_PHONE_MAIN!,
      classes: process.env.NEXT_PUBLIC_CONTACT_PHONE_CLASSES!,
      store: process.env.NEXT_PUBLIC_CONTACT_PHONE_STORE!,
      whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP!,
    },
    address: {
      street: process.env.NEXT_PUBLIC_CONTACT_ADDRESS_STREET!,
      city: process.env.NEXT_PUBLIC_CONTACT_ADDRESS_CITY!,
      postal: process.env.NEXT_PUBLIC_CONTACT_ADDRESS_POSTAL!,
      country: process.env.NEXT_PUBLIC_CONTACT_ADDRESS_COUNTRY!,
      full: `${process.env.NEXT_PUBLIC_CONTACT_ADDRESS_STREET}, ${process.env.NEXT_PUBLIC_CONTACT_ADDRESS_POSTAL} ${process.env.NEXT_PUBLIC_CONTACT_ADDRESS_CITY}, ${process.env.NEXT_PUBLIC_CONTACT_ADDRESS_COUNTRY}`,
    },
    coordinates: {
      lat: parseFloat(process.env.NEXT_PUBLIC_CONTACT_LATITUDE!),
      lng: parseFloat(process.env.NEXT_PUBLIC_CONTACT_LONGITUDE!),
    },
    email: {
      info: process.env.NEXT_PUBLIC_CONTACT_EMAIL_INFO!,
      classes: process.env.NEXT_PUBLIC_CONTACT_EMAIL_CLASSES!,
    },
    mapsDirectionsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_DIRECTIONS_URL!,
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM!,
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK!,
    youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE!,
    whatsappLink: process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP_LINK!,
  },
  classes: {
    schedule: process.env.NEXT_PUBLIC_CLASSES_SCHEDULE_INFO!,
    description: process.env.NEXT_PUBLIC_CLASSES_DESCRIPTION!,
  },
  storeInfo: {
    products: process.env.NEXT_PUBLIC_STORE_PRODUCTS_INFO!,
  },
  hours: {
    monday: process.env.NEXT_PUBLIC_HOURS_MONDAY || 'Cerrado',
    tuesday: process.env.NEXT_PUBLIC_HOURS_TUESDAY || 'Cerrado',
    wednesday: process.env.NEXT_PUBLIC_HOURS_WEDNESDAY || 'Cerrado',
    thursday: process.env.NEXT_PUBLIC_HOURS_THURSDAY || 'Cerrado',
    friday: process.env.NEXT_PUBLIC_HOURS_FRIDAY || 'Cerrado',
    saturday: process.env.NEXT_PUBLIC_HOURS_SATURDAY || 'Cerrado',
    sunday: process.env.NEXT_PUBLIC_HOURS_SUNDAY || 'Cerrado',
  },
} as const;

// Business hours parser
export function getBusinessHours() {
  return [
    { day: 'Lun', hours: env.hours.monday },
    { day: 'Mar', hours: env.hours.tuesday },
    { day: 'Mié', hours: env.hours.wednesday },
    { day: 'Jue', hours: env.hours.thursday },
    { day: 'Vie', hours: env.hours.friday },
    { day: 'Sáb', hours: env.hours.saturday },
    { day: 'Dom', hours: env.hours.sunday },
  ];
}

// Helper function to format hours (replace comma with " y de ")
function formatHours(hours: string): string {
  return hours.replace(/,/g, ' y de ');
}

// Simplified business hours (groups weekdays together)
export function getSimplifiedBusinessHours() {
  const hours = getBusinessHours();

  // Obtener horarios de lunes a viernes
  const weekdayHours = hours.slice(0, 5); // Lun-Vie
  const saturdayHours = hours[5]; // Sáb
  const sundayHours = hours[6]; // Dom

  // Verificar si L-V tienen el mismo horario
  const allWeekdaysSame = weekdayHours.every(
    day => day.hours === weekdayHours[0].hours
  );

  return [
    {
      day: 'Lunes a Viernes',
      hours: allWeekdaysSame
        ? formatHours(weekdayHours[0].hours)
        : 'Horarios variables (consultar)',
    },
    {
      day: 'Sábados',
      hours: formatHours(saturdayHours.hours),
    },
    {
      day: 'Domingos',
      hours: formatHours(sundayHours.hours),
    },
  ];
}
