import React, {useState} from 'react'
import { TextField, Button } from '@mui/material'

const styles = {
    form: {
        color: 'black',
        fontSize: "20px",
        position: "absolute",
        left: "50%",
        top: "50%",
        width: "600px",
        height: "480px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#D7D8FF",
        borderRadius: "10px",
        zIndex: 4,
        transform: "translate(-50%, -50%)",
        justifyContent: "center",
    },
    field: {
        backgroundColor: "#fff",
        width: "360px",
        margin: "12px"
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        width: "360px",
        justifyContent: 'space-between',
        marginTop: '6px'
    }
}

const CheckinComponent = () => {
    const [address, setAddress] = useState("")
    const [comm, setComm] = useState("")
    return (
        <div style={styles.form} className='form'>
            <p>Check in</p>
            <TextField 
                style={styles.field} 
                label="Адрес" 
                variant="outlined" 
                onChange={(txt) => { setAddress(txt.target.value) }}
            />
            <TextField 
                style={styles.field} 
                label="Комментарий" 
                variant="outlined" 
                onChange={(txt) => { setComm(txt.target.value) }}
            />
            <Button variant="contained">Добавить фото</Button>
            <div style={styles.buttons}>
                <Button variant="contained">Принять</Button>
                <Button variant="contained">Отмена</Button>
            </div>
        </div>
    )
}

export default CheckinComponent;