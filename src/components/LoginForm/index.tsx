import { Typography, TextField, Button, Stack } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { ChangeEvent, useState } from 'react';
import { useStore } from '../../hooks/useStore';
import { useNavigate } from 'react-router-dom';

const LoginForm = observer(() => {
    const navigate = useNavigate();
    const {
        rootStore: { loginStore },
    } = useStore();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const onLogin = async () => {
        await loginStore.fetchUserToken(userName, password);
        navigate('/');
    }

    return (
        <Stack spacing={4} direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h2" sx={{ mt: '2rem' }} align='center'>
                Login
            </Typography>
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                required
                style={{ width: '30vw' }}
                value={userName}
                onChange={onChangeUserName} />
            <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                required
                style={{ width: '30vw' }}
                value={password}
                onChange={onChangePassword} />
            <Button variant="contained" sx={{ mt: '2rem', width: '270px' }} onClick={onLogin}>
                Sign In
            </Button>
            <Typography variant="subtitle2" sx={{ mt: '2rem' }} align='center'>
                For testing ---- Name: johnd | Pass: m38rmF$
            </Typography>
        </Stack >
    )
})

export default LoginForm;
