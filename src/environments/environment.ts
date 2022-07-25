// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  firebaseConfig : {
    apiKey: 'AIzaSyBhADJQBWps30_8laakTu-NSao7i412d6k',
    authDomain: 'case-md5.firebaseapp.com',
    databaseURL : 'https://case-md5-default-rtdb.firebaseio.com',
    projectId: 'case-md5',
    storageBucket: 'case-md5.appspot.com',
    messagingSenderId: '622085079004',
    appId: '1:622085079004:web:6dfe373b178faf8eeed919',
    measurementId: 'G-4BHJBRKEL0'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
