import { useState } from "react";

import { getDatabase, ref, onValue, set } from "firebase/database";
// Get a non-default Storage bucket
import { app } from './firebaseConfig'

const db = getDatabase(app);

export const writeCommData = (id, number, comm, photo, isNegative) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
    set(ref(db, 'shops/' + id + '/checkIns/' + number), {
        comment: comm,
        photo: photo,
        isNegative: isNegative,
        date: date
    });
    return true  
}

