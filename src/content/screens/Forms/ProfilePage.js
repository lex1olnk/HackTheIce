import { TextField, Button } from '@mui/material'

const styles = {
    body: {
        backgroundColor: "#D7D8FF",
        width: "800px",
        height: "600px",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex"
    },
    leftBar: {
        width: "20%",
    },
    rightBar: {
        width: "80%",
        backgroundColor: "#FAFAFF",
        display: 'flex'
    },
    textField: {
        height: "50px",
        width: "500px",
        margin: "20px",
    },
    container: {
        width: "90%",
        margin: "auto"
    }
}

const ProfilePage = () => {
    return (
        <div style={styles.body}>
            <div style={styles.leftBar}>
                Меню
            </div>
            <div style={styles.rightBar}>
                <div style={styles.container}>
                    <div>
                        <div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <TextField 
                                style={styles.textField}
                            />
                            <TextField 
                                style={styles.textField}
                            />
                            <Button />
                        </div>
                    </div>
                    <div>
                        Мои достижения
                        <div>
                            Таблица
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;