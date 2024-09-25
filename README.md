first install require dependency

npm install @reduxjs/toolkit react-redux @types/react-redux

then create to add global state and then link it to store as mention in the process file
// authSlice.ts
// store.ts

use same syntex ta mention in the files

this is of this perticular version specific, alter the process if there is change in new or old version
"@reduxjs/toolkit": "^2.2.7",
"@types/react-redux": "^7.1.34",
"react": "^18.3.1",
"react-redux": "^9.1.2"


// App.tsx consist of login setup and how you can change the state for login and logout

// StatusComponent.tsx consist of calling of a normal state and ways to change it