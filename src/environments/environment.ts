// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'frontendportafoliosorias',
    appId: '1:427347563951:web:d3c0c057fd2928c5378b5a',
    storageBucket: 'frontendportafoliosorias.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyChMrxsJZ0EKCy2x3jTUNP8aeBNQh1tJuA',
    authDomain: 'frontendportafoliosorias.firebaseapp.com',
    messagingSenderId: '427347563951',
  },

  production: false,
 //URL: 'https://backendportafoliosorias.herokuapp.com/'
  URL: 'http://localhost:8080/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
