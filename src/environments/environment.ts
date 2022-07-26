// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  firebaseConfig : {
    apiKey: "AIzaSyA4R7krmOYjOdxiVy39wpULdQ_kklKy-HM",
    authDomain: "case-md5-42a44.firebaseapp.com",
    databaseURL:"https://case-md5-42a44-default-rtdb.firebaseio.com",
    projectId: "case-md5-42a44",
    storageBucket: "case-md5-42a44.appspot.com",
    messagingSenderId: "657962097956",
    appId: "1:657962097956:web:51710b5748e7b5f37527b1",
    measurementId: "G-G1XDGSZYQV"
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
