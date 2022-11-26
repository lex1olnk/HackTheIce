import React from 'react'
import { Button } from '@mui/material'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from './firebaseConfig'
import { getStorage, ref as ref2, getDownloadURL }from "firebase/storage";

const styles = {
    input: {
        position: 'absolute',
        width: "400px",
        height: '600px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        transform: 'translate(-50%, -50%)',
        zIndex: 6,
        left: "50%",
        background: "rgb(255, 255, 255, 90%)",
        padding: 20,
        top: "50%"
    }
}

const CheckInInput = props => {
    const [data, setData] = React.useState(null)
    const database = getDatabase(app);
    var user = data ? Object.keys(data)[0] : null
    console.log(data)
    if (props.data && !data) {
        onValue(ref(database, '/shops/' + props.data._id +'/checkIns'), (snapshot) => {
            if (snapshot.val()) {

                console.log(snapshot.val())

                const storage = getStorage(app, "gs://hacktheice-44bd8.appspot.com");
                const ph = snapshot.val()[Object.keys(snapshot.val())[0]].photo
                getDownloadURL(ref2(storage, ph))
                    .then((url) => {
                    // `url` is the download URL for 'images/stars.jpg'
                
                    // This can be downloaded directly:
                    const xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = (event) => {
                        const blob = xhr.response;
                    };
                    xhr.open('GET', url);
                    xhr.send();
                
                    // Or inserted into an <img> element
                    const img = document.getElementById('photo');
                    img.setAttribute('src', url);
                    })
                    .catch((error) => {
                    // Handle any errors
                });
                setData(snapshot.val())
            }
        });
        
    }


    return (
        <div style={styles.input} id="checkInInput">
            <div>
                {data ? user : ''}
            </div>
            <div>
                {data ? data[user].isNegative ? data[user].comment : '' : ''}
            </div>
            <div>
                <img 
                    id="photo"
                    style={{width: "300px", height: "300px"}}
                />
                {data ? data[user].isNegative ? data[user].photo : '' : ''}
            </div>
            <Button onClick={() => {
                document.getElementById('checkInInput').style.visibility = 'hidden'
            }}>
                Close
            </Button>
        </div>
    )
}

export default CheckInInput;