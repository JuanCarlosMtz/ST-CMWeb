import "../css/LogIn.css";
import emailIcon from "../img/emailIcon.png";
import passwordIcon from "../img/passwordIcon.png";

import { auth } from "../lib/firebase-config"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import SignModal from "../components/SignModal";
import { useNavigate } from "react-router-dom";

import { useState, useEffect  } from "react";
import { useForm } from "react-hook-form";

function LogIn() {
    const [modalOpen, setModalOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [dummy, setDummy] = useState(0);
    const { register, handleSubmit, reset } = useForm();


    const login = async (data) => {
        setLoading(true);
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
        } catch(error) {
            alert(error.message);
        }
        setLoading(false);
        {/*reset();*/}
    }

    {/*const [userData, setUserData] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUserData(currentUser);
    })*/}

    onAuthStateChanged(auth, user => {
        if(user) {
          window.location = '/testpage';
        }
      });

    const [img, setImg] = useState();
    const fetchImage = async () => {
        const res = await fetch("https://random.imagecdn.app/1080/720");
        const imageBlob = await res.blob();
        const imageObjectURL =URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    useEffect(() => {
        fetchImage();
    }, []);

    {/*setInterval(fetchImage, 30000);*/}

    const imgStyle={
        background: `url(${img})`,
    };

    return (
        <div className="loginContainer">
            {modalOpen && <SignModal setOpenModal={setModalOpen} />}
            <div className="column1" style={imgStyle}>
                <div className="layer">
                    <div className="layerTitle">
                        LoopEdia
                    </div>
                    <div className="layerCopy" onClick={() => {fetchImage()}}>
                        &copy; Copyright 2023 Error508. All rights reserved.
                    </div>
                </div>
            </div>
            <div className="column2">
                {/*
                {isLoading && <p>Loading...</p>}
                {isLoggedIn ? "True" : "False"}
                */}
                <form onSubmit={handleSubmit(login)}>
                    <div className="logTitle">
                        Usuario registrado
                    </div>
                    <input type="text" placeholder="Email" {...register("email")} />
                    <input type="password" placeholder="Contraseña" {...register("password")} />
                    <button type="submit" disabled={isLoading}>{isLoading ? (
                        <div className="loader-container">
                            <div className="spinner"></div>
                        </div>
                        ) : "Iniciar sesión"}</button>
                    <div className="register">
                        ¿No tienes cuenta?
                        <a href="#" onClick={() => { setModalOpen(true); }}>{'\n'}Registrarse</a>
                    </div>
                </form>
            </div>
            
        </div>
    );
}

export default LogIn;