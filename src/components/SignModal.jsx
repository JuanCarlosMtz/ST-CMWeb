import "../css/SignModal.css"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase-config"

function SignModal({ setOpenModal }) {
    if (!setOpenModal) return null;

    const [isLoading, setLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    async function signup(data) {
        setLoading(true);
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            alert("Registro exitoso");
        } catch(error) {
            alert(error);
        }
        setLoading(false);
        reset();
    }

    return (
        <div className="modalBG">
            <div className="modalContainer">
                <div className="closeBtn">
                    <button onClick={() => { setOpenModal(false); }}>
                        x
                    </button>
                </div>
                <div className="modalTitle">
                    Usuario nuevo
                </div>
                <div className="modalBody">
                    <form onSubmit={handleSubmit(signup)}>
                        <input type="text" placeholder="Email" {...register("email")} />
                        <input type="password" placeholder="Contraseña" {...register("password")} />
                        <button type="submit" disabled={isLoading}>{isLoading ? (
                        <div className="loader-container">
                            <div className="spinner"></div>
                        </div>
                        ) : "Registrarse"}</button>
                    </form>
                </div>
                {/*
                <div className="modalFooter">
                    <button onClick={() => { setOpenModal(false);}}>Cancelar</button>
                </div>
                */}
            </div>
        </div>

    );
}

export default SignModal;