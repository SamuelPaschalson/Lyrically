import * as Expo from 'expo';

const { ...social } = Expo.Constants.manifest.extra.social;

// Expo constants
export const { expoVersion } = Expo.Constants;
// export const iOSBuild = Constants.platform.ios.buildNumber;
export const { manifest } = Expo.Constants;
// functions
export const getCurrentYear = new Date().getFullYear();
// Social Links
export const socialLinks = [
  {
    icon: 'google-play',
    label: 'Play Store',
    url: ''
  },
  { icon: 'app-store', label: 'iTunes Store', url: '' },
  { icon: 'github', label: 'Github Project', url: 'https://github.com/SamuelPaschalson/' },
  { icon: '', label: 'My Portfolio', url: 'https://samuel-paschalson.netlify.app/' }
];
