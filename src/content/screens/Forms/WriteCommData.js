import { useState } from "react";

import { getDatabase, ref, onValue, set, get, child, update } from "firebase/database";
// Get a non-default Storage bucket
import { app } from './firebaseConfig'
import { Password } from "@mui/icons-material";

const db = getDatabase(app);

const getUserData = (db, number) => {

}

export const writeCommData = (id, number, comm, photo, isNegative) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours() < 10 ? '0' + current.getHours() : current.getHours() }:${current.getMinutes() < 10 ? '0' + current.getMinutes() : current.getMinutes()}`;
    const dbRef = ref(db)
    set(ref(db, 'shops/' + id + '/checkIns/' + number), {
        comment: comm,
        photo: photo,
        isNegative: isNegative,
        date: date
    });
    const postData = {};
    get(child(dbRef, `users/${number}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          set(ref(db, 'users/' + number), {
            countOfChecks: snapshot.val().countOfChecks + 1,
            level: snapshot.val().level,
            name: snapshot.val().name,
            number: snapshot.val().number,
            password : snapshot.val().password
        });
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    console.log(postData)

    
    return true  
}

