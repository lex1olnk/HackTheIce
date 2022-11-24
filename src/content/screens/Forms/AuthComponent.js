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

const FormComponent = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div style={styles.form} className='auth'>
            <p>Регистрация</p>
            <TextField 
                style={styles.field} 
                label="Имя" 
                variant="outlined" 
                onChange={(txt) => { setName(txt.target.value) }}
            />
            <TextField 
                style={styles.field} 
                label="Номер телефона" 
                variant="outlined" 
                onChange={(txt) => { setNumber(txt.target.value) }}
            />
            <TextField 
                style={styles.field} 
                label="Пароль" 
                variant="outlined" 
                onChange={(txt) => { setPassword(txt.target.value) }}
            />
            <div style={styles.buttons}>
                <Button variant="contained">Принять</Button>
                <Button variant="contained">Отмена</Button>
            </div>
        </div>
    )
}

export default FormComponent;