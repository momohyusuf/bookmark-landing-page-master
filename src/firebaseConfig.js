import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBF-B8qpxMYPWcsa4JCofa5q4jukYa5AnA',
  authDomain: 'experimental-72dc7.firebaseapp.com',
  projectId: 'experimental-72dc7',
  storageBucket: 'experimental-72dc7.appspot.com',
  messagingSenderId: '323094758512',
  appId: '1:323094758512:web:dd82f4b27d46d2a22320b5',
  measurementId: 'G-28KQ270WMZ',
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
