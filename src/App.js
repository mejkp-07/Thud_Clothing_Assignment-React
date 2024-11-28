import React, { useState } from "react";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import "./index.css";

const App = () => {
    const [user, setUser] = useState(null);
    const onLogout = () => setUser(null);

    return (
        <div className="app">
            {user ? (
                <ProductList user={user} onLogout={onLogout}/>
            ) : (
                <Login onLogin={(user) => setUser(user)} />
            )}
        </div>
    );
};

export default App;
