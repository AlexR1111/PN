import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [password, setPassword] = useState ("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (password ==="123456") {
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
                <button onClick={handleLogin}Einloggen></button>
        </div>
    );
}