// app.config.js
import 'dotenv/config';

export default {
  expo: {
    name: "UrbanEndeavors",
    slug: "your-app-slug",
    scheme: "yourappscheme",
    ios: {
      bundleIdentifier: "com.yourdomain.urbanendeavors",
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY, // The API key for iOS
      },
    },
    android: {
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_API_KEY, // The API key for Android
        },
      },
    },
    extra: {
      eas: {
        projectId: "4c5035bc-8c09-4677-85d1-7e7d6862dda5"
      },
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
  },
};
