import React, {useState} from 'react';
import styled from 'styled-components';

function Contacto() {
    const [mensajeEnviado, setMensajeEnviado] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const nom = document.getElementById("nom").value;
        const lsname = document.getElementById("lsname").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        try {
            const response = await fetch('/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nom,
                    lsname,
                    email,
                    message,
                }),
            });

            const data = await response.json();

            if (response.status === 200) {
                setMensajeEnviado(true);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("¡Error al enviar el mensaje!");
        }
    };
    return (
        <>
            <DivContainer id='contacto'>
                <h1>Contacto</h1>
                <form onSubmit={handleSubmit}>
                    <div className='inputs-one'>
                        <div className='inputs'>
                            <label>Nombre</label>
                            <input type="text" id="nom" name="nom" required/>
                        </div>
                        <div className='inputs'>
                            <label>Apellido</label>
                            <input type="text" id="lsname" name="lsname" required/>
                        </div>
                    </div>
                    <div className='inputs'>
                        <label>Correo</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className='inputs'>
                        <label>Enviar mensaje</label>
                        <textarea id="message" name="message" rows="4" />
                    </div>
                    <div className='inputs-one'>
                        <button type="submit">Enviar</button>
                        {mensajeEnviado && <p className='mensaje'><b>¡Gracias por el mensaje!</b></p>}
                    </div>
                </form>
                
            </DivContainer>
        </>
  );
}

export default Contacto

const DivContainer = styled.div`
    box-sizing: border-box;
    ::selection {
        background: none;
    }
    ::-moz-selection {
        background: none;
    }
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 30px auto 30px auto;
    padding: 60px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (max-width: 700px) {
        margin: 30px 30px 30px 30px;
    }
    h1 {
        font-size: 28px;
        margin-bottom: 30px;
    }
    form {
        width: 100%;
    }
    .inputs-one {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        @media (max-width: 700px) {
            display: block;
        }
    }   
    .inputs {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        width: 100%;
    }
    label {
        font-size: 16px;
        margin-bottom: 8px;
    }
    input,
    textarea {
        border: none;
        font-family: Poppins;
        border-bottom: 1px solid #ccc;
        transition: border-bottom .2s;
        outline: none;
        padding: 8px;
        font-size: 16px;
        box-sizing: border-box;
    }
    input:focus, textarea:focus {
        border-bottom: 1px solid #3146FF;
    }
    textarea {
        resize: none;
    }
    button {
        padding: 15px;        
        background-color: #ED2820;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23C30A0A'/%3E%3Cstop offset='1' stop-color='%23ED2820'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23d81b15'/%3E%3Cstop offset='1' stop-color='%23ED2820'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=''%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform=''%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-size: cover;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: none;
        color: white;
        font-size: 18px;
        width: 50%;
        border-radius: 5px;
        margin-top: 15px;
        cursor: pointer;
        @media (max-width: 700px) {
            width: 100%;
        }
    }
    button:hover {
        background: #3146FF;
    }
    .mensaje {
        //margin-top: 20px;
        font-size: 16px;
        color: #000000;
    }
`
