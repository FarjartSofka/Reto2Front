// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /*firebaseConfig: {
    apiKey: "AIzaSyAYGb7mIfkfqBKpiM4gQnWF3IOX-n3JA0M",
    authDomain: "cargame-f3ea5.firebaseapp.com",
    projectId: "cargame-f3ea5",
    storageBucket: "cargame-f3ea5.appspot.com",
    messagingSenderId: "246079107837",
    appId: "1:246079107837:web:aa0b24fbe7fd2ea12ec494"
  },
  url_api:"http://localhost:8080",
  webSocketUrl: "ws://localhost:8080"*/


  firebaseConfig: {
    apiKey: "AIzaSyAYGb7mIfkfqBKpiM4gQnWF3IOX-n3JA0M",
    authDomain: "cargame-f3ea5.firebaseapp.com",
    projectId: "cargame-f3ea5",
    storageBucket: "cargame-f3ea5.appspot.com",
    messagingSenderId: "246079107837",
    appId: "1:246079107837:web:aa0b24fbe7fd2ea12ec494"
  },
  url_api:"https://reto-web-2.herokuapp.com/",
  webSocketUrl: "ws://reto-web-2.herokuapp.com"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
