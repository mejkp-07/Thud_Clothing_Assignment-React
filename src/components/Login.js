import React, { useState } from "react";
import { loadCSV } from "../utils/loadCSV";
import usersCSV from "../data/users.csv";
import { TextField, Button, Card, Typography, Box } from "@mui/material";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        loadCSV(usersCSV, (users) => {
            const user = users.find(
                (u) => u.Username === username && u.Password === password
            );
            if (user) {
                onLogin(user);
            } else {
                setError("Invalid username or password");
            }
        });
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
            }}
        >
            <Card
                sx={{
                    padding: 4,
                    width: 400,
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
            >
                <Typography variant="h4" mb={3} align="center">
                    Welcome Back!
                </Typography>
                <TextField
                    label="Username"
                    autoComplete="off"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    autoComplete="off"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                    <Typography color="error" mt={1} mb={2}>
                        {error}
                    </Typography>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Card>
        </Box>
    );
};

export default Login;
