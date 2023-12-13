import React, {useState}  from 'react';
import styled from 'styled-components';
import user from '../Img/user.png';
import passw from '../Img/passw.png';

const Iniciarsesion = ({ state, changeState }) => {
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/iniciarsesion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nom: document.getElementById("nom").value,
                    pass: document.getElementById("pass").value,
                }),
            });

            const data = await response.json();

            if (response.status !== 200) {
                setError(data.message);
            } else {
                setError("");
                document.getElementById("nom").value = "";
                document.getElementById("pass").value = "";
                changeState(false);
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }
        } catch (error) {
            setError("¡Intenta nuevamente!");
        }
    };

    return (
        <>
            {state &&
                <OverLay>
                    <DivContainer>
                        <HeaderContainer>
                            <h3>Inicio de Sesión</h3>
                        </HeaderContainer> 
                        <CloseBtn onClick={() => changeState(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </CloseBtn>
                        <Formulario>
                            <div className="re-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="input">
                                        <img src={user}></img>
                                        <input type="text" placeholder="Nombre de usuario" name="nom" id="nom" required/>
                                    </div>
                                    <div className="input">
                                        <img src={passw}></img>
                                        <input type="password" placeholder="Contraseña" name="pass" id="pass" required/>
                                    </div>
                                    <p><span>{error}</span></p>
                                    <b><p onClick={() => changeState(false)}>Crear cuenta</p></b>
                                    <button type="submit" value="iniciarsesion">Iniciar Sesión</button>                    
                                </form>
                            </div>
                        </Formulario>
                    </DivContainer>
                </OverLay>
            }
        </>
    );
};

export default Iniciarsesion

const OverLay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.846);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const DivContainer = styled.div`
    width: 500px;
    min-height: 100px;
    background: #f2f2f2;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;
`
const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    padding-bottom: 5px;
    border-bottom: 1px solid #E8E8E8;
    h3 {
        font-weight: 600;
        font-size: 20px;
        color: #040202;
    }
`
const CloseBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #000000;
    &:hover {
        background: #c6c9db7b;
    } 
    svg {
        width: 100%;
        height: 100%;
    }
`
const Formulario = styled.div`
    .re-form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;  
    }
    .re-form form {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;
        width: 400px;
        padding-bottom: 20px;
        img {
            width: 28px;
        }
        .input {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            padding: 30px;
            display: flex;
            border-radius: 8px;
            background: #ffffff;
            width: 100%;
            height: 60px;
            align-items: center;
            input {
                border: none;
                outline: none;
                width: 85%;
                font-size: 16px;
                padding: 14px;
                transition: border-bottom .2s;
                border-bottom: 1px solid #c6c9db7b;
                &:focus {
                    border-bottom: 1px solid #3146FF;
                }
            }
        }
        p {
            cursor: pointer;
            &:hover {
                color: #3146FF;
            }
            span {
                color: #d40303;
            }
        }
        button {
            border: none;
            background-color: #040202;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23040202' width='11' height='11'/%3E%3Crect fill='%23050303' x='10' width='11' height='11'/%3E%3Crect fill='%23060404' y='10' width='11' height='11'/%3E%3Crect fill='%23080505' x='20' width='11' height='11'/%3E%3Crect fill='%23090605' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%230a0606' y='20' width='11' height='11'/%3E%3Crect fill='%230b0707' x='30' width='11' height='11'/%3E%3Crect fill='%230d0808' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%230e0909' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%230f0a09' y='30' width='11' height='11'/%3E%3Crect fill='%230f0b0a' x='40' width='11' height='11'/%3E%3Crect fill='%23100c0b' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23110d0b' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23120d0c' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23130e0d' y='40' width='11' height='11'/%3E%3Crect fill='%23140f0d' x='50' width='11' height='11'/%3E%3Crect fill='%2314100e' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2315100f' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2316110f' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23161210' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23171210' y='50' width='11' height='11'/%3E%3Crect fill='%23181311' x='60' width='11' height='11'/%3E%3Crect fill='%23181311' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23191412' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23191512' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%231a1512' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%231a1613' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%231b1613' x='70' width='11' height='11'/%3E%3Crect fill='%231b1714' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%231c1714' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%231c1815' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%231d1815' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%231d1915' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%231e1a16' x='80' width='11' height='11'/%3E%3Crect fill='%231f1a16' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%231f1b16' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23201b17' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23201c17' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23211c17' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23211d18' x='90' width='11' height='11'/%3E%3Crect fill='%23211d18' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23221e19' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23221f19' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23231f19' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%2323201a' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%2324201a' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%2324211a' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%2325221b' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%2325221b' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%2325231c' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%2326231c' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%2326241c' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%2327251d' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%2327251d' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%2327261e' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%2328261e' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%2328271f' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%2328281f' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23292820' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23292920' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
            background-attachment: fixed;
            background-size: cover;
            cursor: pointer;
            width: 100%;
            color: white;
            padding: 15px;        
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            font-size: 18px;
            border-radius: 5px;
            margin-top: 15px;
        }
    }
`