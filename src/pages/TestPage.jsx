import { auth } from "../lib/firebase-config"
import { useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function TestPage() {

    onAuthStateChanged(auth, user => {
        if(!user) {
          window.location = '/';
        }
      });

    const logout = async () => {
        await signOut(auth);
    }


    {/*
    const isLoggedIn = pb.authStore.isValid;

    const [dummy, setDummy] = useState(0);

    function logout() {
        pb.authStore.clear();
        setDummy(Math.random());
    }

    if (isLoggedIn)
        return (
            <div>
                <h1>Logged in: {isLoggedIn && pb.authStore.model.email}</h1>
                <button onClick={logout}>Log Out</button>
            </div>
        );

    const navigate = useNavigate();
        */}

    return (
        <div>
            Página de prueba
            <button onClick={logout}>Log Out</button>
        </div>
    );
}

export default TestPage;