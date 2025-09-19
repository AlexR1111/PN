import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [password, setPassword] = useState ("");
    const navigate = useNavigate();
    const correctPassword = process.env.REACT_APP_ADMIN;
    const handleLogin = () => {
        if (password === correctPassword) {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/admin");
        } else {
            alert("Falsches Password");
        }
    };

    return (
        <div className="login-page">
            <h2>Admin Login</h2>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Passwort eingeben"
                />
                <button className="card" onClick={handleLogin}>Einloggen</button>
        </div>
    );
}