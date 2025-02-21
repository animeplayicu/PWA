import type { Config } from './types';

export default {
  id: '/',
  name: 'anime play',
  shortName: 'anime play',
  description: 'anime play is one of the best online anime streaming site where you can watch & download free Hindi, Tamil, Telugu Dubbed Anime',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#000',
  themeColor: '#7b1fa2',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: 'https://www.animeplay.icu',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Shortcut 1',
      shortName: 'Shortcut 1',
      description: 'Shortcut 1 description goes here...',
      url: '/search/label/shortcut-1?utm_source=homescreen',
    },
    {
      name: 'Shortcut 2',
      shortName: 'Shortcut 2',
      description: 'Shortcut 2 description goes here...',
      url: '/search/label/shortcut-2?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.animeplay.icu',
} satisfies Config;
