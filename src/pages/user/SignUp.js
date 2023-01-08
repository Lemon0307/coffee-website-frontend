import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../../css/forms.css'

const SignUp = () => {
    
    const [firstName, setFirstName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch('http://localhost:8000/auth/sign-up', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: firstName,
                surname: surname,
                username: username,
                email: email,
                password: password,
            }),
            redirect: 'follow'
        }).then(res => res.json())
        .then(result => <Navigate to={result.url}/>)
    }
    return (
        <div>
            <h1>{message}</h1>
            <form onSubmit={handleSubmit} method="POST">
                <input
                onChange={e => setFirstName(e.target.value)}
                type="text" name="firstname" value={firstName} placeholder="Enter your first name..."
                 />
                <input
                onChange={e => setSurname(e.target.value)}
                type="text" name="surname" value={surname} placeholder="Enter your surname..."
                 />
                <input
                onChange={e => setUsername(e.target.value)}
                type="text" name="username" value={username} placeholder="Enter your username..."
                 />
                <input
                onChange={e => setEmail(e.target.value)}
                type="text" name="email" value={email} placeholder="Enter your email..."
                />
                <input
                onChange={e => setPassword(e.target.value)}
                type="text" name="password" value={password} placeholder="Enter your password..."
                 />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
 
export default SignUp;