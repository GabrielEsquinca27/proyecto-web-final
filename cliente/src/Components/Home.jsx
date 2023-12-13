import React, {useState} from 'react';
import styled from 'styled-components';
import banner1 from '../Img/banner1.png';
import banner2 from '../Img/banner2.jpg';
import banner3 from '../Img/banner3.jpeg';
import banner4 from '../Img/banner4.jpg';
import banner5 from '../Img/banner5.jpg';
import Registrarse from './Registrarse';

function Home() {
    const [selectedOption, setSelectedOption] = useState(0);
    const banners = [banner1, banner2, banner3, banner4, banner5];
    const handleOptionClick = (index) => {
        setSelectedOption(index);
    };

    const[modalState, changeModalState] = useState(false);

    return (
        <>
            <DivContainer>
                <div className="contenedor">
                    <div className='seccion'>
                        <div className="left-section">
                            <p id='t1'>"Tu Bienestar es Nuestra Prioridad"</p>
                            <h1 id='titulo'>Bienvenido</h1>
                            <p id='t2'>¡Únete a la Familia Cruz Roja!</p>
                            <button onClick={() => changeModalState(!modalState)}>Unirse ahora</button>
                        </div>
                        <div className="right-section">
                            <img src={banners[selectedOption]} alt={`Banner ${selectedOption + 1}`} />
                            <div class="capa"></div>
                        </div>
                    </div>           
                </div>
                <div class="opciones">
                    {[...Array(5).keys()].map((index) => (
                        <div
                            key={index}
                            className={`opcion ${index === selectedOption ? 'seleccionada' : ''}`}
                            onClick={() => handleOptionClick(index)}
                        ></div>
                    ))}
                </div> 
                <Registrarse
                    state={modalState}
                    changeState={changeModalState}
                ></Registrarse>
            </DivContainer>
        </>
    );
}

export default Home

const DivContainer = styled.div`
    box-sizing: border-box;
    user-select: none;
    ::selection {
        background: none;
    }
    ::-moz-selection {
        background: none;
    }
    .contenedor {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: #E00303;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FF7063'/%3E%3Cstop offset='1' stop-color='%23E00303'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23f03a33'/%3E%3Cstop offset='1' stop-color='%23E00303'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform='translate(0 60)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-147.6 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.56' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
        margin-top: 150px;
        @media (max-width: 980px) {
            margin-top: 75px;
        }
    }
    .seccion {
        position: relative;
        width: 100%;
        min-height: 500px;
        max-width: 1100px;
        display: flex;
        justify-content: space-between;
        background: #ffffff;
        margin: 40px;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        @media (max-width: 980px) {
            flex-direction: column;
            align-items: stretch;
            margin: 0;
            height: auto;
        }
    }
    .left-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 35%;
        height: 100%;
        padding: 25px;
        text-align: center;
        @media (max-width: 980px) {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
        }
        button {
            padding: 15px;
            background: linear-gradient(180deg, #FF3131 0%, rgba(187, 21, 21, 0.85) 100%);
            box-shadow: 0px 4px 4px hsla(0, 0%, 0%, 0.25);
            border: none;
            color: white;
            font-size: 18px;
            width: 150px;
            border-radius: 5px;
            margin-top: 15px;
            cursor: pointer;
        }
        button:hover {
            background: #3146FF;
        }
    }
    #t1 {
        font-size: 23px;
        text-transform: uppercase;
        font-weight: 700;
    }
    #titulo {
        font-size: 45px;
        color: #FF3131;
    }
    #t2 {
        font-size: 18px;
        font-weight: 600;
    }
    
    .right-section {
        display: flex;
        width: 65%;
        position: relative;
        img {
            max-width: 100%;
            height: auto;
        }
        @media (max-width: 980px) {
            width: 100%;
        }
    }
    .opciones {
        display: flex;
        padding: 10px;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        gap: 15px;
        .opcion {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: #FB7F7F;
            &.seleccionada {
                border-radius: 50%;
                background: #FF3131;
            }
        }
        .opcion:hover {
            background: #3146FF;
            transition: 0.2s;
        }
    }
`
