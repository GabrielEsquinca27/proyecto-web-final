import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import Registrarse from './Registrarse'
import Iniciarsesion from './Iniciarsesion'
import Citas from './Citas'

function Navbar() {
        
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive"
		);
	};

    const[modalState1, changeModalState1] = useState(false);
    const[modalState2, changeModalState2] = useState(false);
    const[modalState3, changeModalState3] = useState(false);

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/sesion")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    const handleClick = async () => {
        try {
            await fetch('/cerrarsesion', { method: 'GET'});
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
        <NavContainer>
            <div className='header'>
                <div className='logo'>
                    <svg width="54" height="54" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ED2820" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/>
                    </svg>
                    <h2>Cruz Roja <span>Yajalón</span></h2>
                    
                </div>
                <div className='usuario'>
                    <div className='cita' onClick={() => changeModalState3(!modalState3)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
                        </svg>
                    </div>
                    <div className='nombre'>
                        <p><b>¡</b>Hola <span>{!data ? " Usuario " : data}</span><b>!</b></p>
                    </div>     
                    {!data ? (
                        <div className='icono' onClick={() => changeModalState2(!modalState2)}>
                            <svg width="38" height="38" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </g>
                            </svg>
                        </div>                        
                        ) : (
                        <div className='icono2'>
                            <svg width="38" height="38" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </g>
                            </svg>
                        </div>
                    )}              
                </div>
            </div>
            <div className='nav-bar'>
                <span>
                    <h2>Cruz Roja <span>Yajalón</span></h2>
                </span>
                <div className='nav-links' ref={navRef}>                    
                    <a href="/#" id='op'>Inicio</a>
                    <a href="/#beneficios" id='op'>Beneficios</a>
                    <a href="/#servicios" id='op'>Servicios</a>
                    <a href="/#acerca" id='op'>Acerca</a>
                    <a href="/#contacto" id='op'>Contacto</a>
                    {!data ? (
                        <a href="/#" id='reg' onClick={() => changeModalState1(!modalState1)}>Registrarse</a>
                        ) : (
                        <a href="/" id='cerrar' onClick={handleClick}>Cerrar sesión</a>
                    )}                    
                </div>
                <div className='buttons'>
                    <div className='user' onClick={() => changeModalState3(!modalState3)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
                        </svg>
                    </div>
                    {!data ? (
                        <div className='user' onClick={() => changeModalState1(!modalState1)}>
                            <span>
                                <svg width="38" height="38" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </g>
                                </svg>
                            </span>
                        </div>
                        ) : (
                        <div className='user' onClick={handleClick}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-door-closed" viewBox="0 0 16 16">
                                    <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z"/>
                                    <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
                                </svg>
                            </span>
                        </div>
                    )} 
                    <div className='burger' onClick={showNavbar}>
                        <Burger />
                    </div>
                </div>
            </div>
            <Registrarse
                state={modalState1}
                changeState={changeModalState1}></Registrarse>
            <Iniciarsesion 
                state={modalState2}
                changeState={changeModalState2}></Iniciarsesion>
            <Citas 
                state={modalState3}
                changeState={changeModalState3}></Citas>
        </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
    box-sizing: border-box;
    user-select: none;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;

    ::selection {
        background: none;
    }
    ::-moz-selection {
        background: none;
    }
    .header {
        display: flex;
        justify-content: space-between;
        background-color: #ffffff;
        color: #000000;
    }
    .logo {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    .usuario {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .usuario div {
        display: flex;
        justify-content: center;
    }
    .nombre span {
        color: #0517B4;
        font-weight: 600;
        
    }
    .nombre p{
        font-size: 18px;
    }
    .cita {
        display: flex;
        align-items: center;
        width: 80px;
        padding: 12px 0px;
    }
    .cita:hover {
        background: #E8E8E8;
        cursor: pointer;
        transition: all 0.5s;
    }
    .icono {
        display: flex;
        align-items: center;
        background: #C2FFE2;
        width: 100px;
        height: 100%;
        padding: 12px 0px;
    }
    .icono2 {
        display: flex;
        align-items: center;
        background: #2637cd;
        width: 100px;
        height: 100%;
        padding: 12px 0px;
    }
    .icono:hover {
        background: #ff000051;
        cursor: pointer;
        transition: all 0.5s;
    }
    h2{
        margin-left: 20px;
        color: #fff;
        font-weight: 400;
        span{
            font-weight: bold;
        }
        @media only screen and (min-width: 980px) {
            color: #151515;
        }
        @media only screen and (max-width: 980px) {
            margin-left: 35px;
        }
    }
    .nav-bar {
        background-color: #151515;
        color: #fff;
        display: flex;
        justify-content: flex-end;

    }
    a {
        font-size: 18px;
        color: white;
        text-decoration: none;
        padding: 18px;
    }
    a[id='op']:hover {
        color: #FFE500;
    }

    #reg {
        background: #3146FF;
        width: 100%;
    }
    #cerrar {
        background: #ED2820;
        width: 100%;
    }
    .nav-bar {
        background-color: rgb(21, 21, 21);
        color: #fff;
        display: flex;
        justify-content: space-between;
    }   
    .nav-links { 
        display: flex;
        align-items: center;
        text-align: center;
        margin-right: 100px; 
        @media only screen and (max-width: 980px) {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            top: -400%;
            height: 0;
            width: 100%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            a {
                color: #ffffff;
                font-size: 1.5rem;
            }
            background-color: #1c1c1c;
            transition: 1s;
            a:hover {
                background-color: #151515;
                color: #fff;
                width: 100%;
            }
            z-index: 800;
        }
    }    
    .responsive {
        top: 0;
        transition: 1s;
        height: 100vh;
	}
    .buttons {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        @media(min-width: 980px) {
            display: none;
        }
    }
    .burger{
        z-index: 1000;
    }
    .user svg:hover {
        transform: scale(0.9);
        transition: all 0.5s;
    }
    .header{
        @media(max-width: 980px) {
            display: none;
        }
    }
`