import { auth } from "../lib/firebase-config"
import { useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase-config";

function TestPage() {

    onAuthStateChanged(auth, user => {
        if(!user) {
          window.location = '/';
        }
      });

    const logout = async () => {
        await signOut(auth);
    }

    const addNote = async () => {
        try {
            const docRef = await addDoc(collection(db, "usersNotes"), {
              createdAt: Date.now(),
              note: "myfirstnote",
              title: "MFTitle",
              user: "user1"
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
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
            <button onClick={addNote}>Add Note</button>
        </div>
    );
}

export default TestPage;