import { getApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";
import { getDatabase, child, get, ref, onValue } from "firebase/database";

const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://hacktheice-44bd8-default-rtdb.europe-west1.firebasedatabase.app/",
};

export const app = initializeApp(firebaseConfig);