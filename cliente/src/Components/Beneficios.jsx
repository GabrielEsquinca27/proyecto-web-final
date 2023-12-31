import React from 'react';
import styled from 'styled-components';
import registro from '../Img/registrarse.png';
import cita from '../Img/calendario.png';
import educacion from '../Img/graduacion.png';
import promocion from '../Img/promocion.png';

function Beneficios() {
    return (
        <>
            <DivContainer id='beneficios'>
                <div className="ben-contenedor" id='seccion-beneficios'>
                    <div className="beneficios">
                        <h1>Beneficios al unirte con nosotros</h1>
                        <div className="divs">
                            <div className="imagen">
                                <img src={registro} alt="Imagen 1" />
                            </div>
                            <div className="informacion" id='ben1'>
                                <p id='ben-titulo'>Facilidad de Registro</p>
                                <p>Regístrate en minutos y accede rápidamente.</p>
                            </div>
                        </div>
                        <div className="divs">
                            <div className="imagen">
                                <img src={cita} alt="Imagen 2" />
                            </div>
                            <div className="informacion" id='ben2'>
                                <p id='ben-titulo'>Citas en línea</p>
                                <p>Programa citas médicas desde la comodidad de tu hogar.</p>
                            </div>
                        </div>
                        <div className="divs">
                            <div className="imagen">
                                <img src={educacion} alt="Imagen 3" />
                            </div>
                            <div className="informacion" id='ben3'>
                                <p id='ben-titulo'>Educación en Salud</p>
                                <p>Aprende sobre tu bienestar con recursos educativos en línea.</p>
                            </div>
                        </div>
                        <div className="divs">
                            <div className="imagen">
                                <img src={promocion} alt="Imagen 4" />
                            </div>
                            <div className="informacion" id='ben4'>
                                <p id='ben-titulo'>Promociones y descuentos</p>
                                <p>Disfruta de ofertas exclusivas con nosotros.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DivContainer>
        </>
    );
}
export default Beneficios

const DivContainer = styled.div`
    box-sizing: border-box;
    user-select: none;
    ::selection {
        background: none;
    }
    ::-moz-selection {
        background: none;
    }
    .ben-contenedor {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .ben-contenedor h1 {
        font-size: 28px;
        padding: 17px;
    }
    .beneficios {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: 1100px;
        width: 100%;
        //background: #F4F4F4;
        background: #fff;
        gap: 20px;
        margin: 20px 0px 0px 0px;
        padding: 20px 30px 30px 30px;
    }
    .divs {
        display: flex;
        align-items: center;
        width: 600px;
        height: 150px;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
        @media (max-width: 980px) {
            width: 100%;
        }
    }
    .imagen {
        display: flex;
        width: 30%;
        height: 100%;
        justify-content: center;
        align-items: center;
        background: #ffffff;
    }
    .divs img {
        width: 120px;
        height: 120px;
        @media (max-width: 980px) {
            width: 90px;
            height: 90px;
        }
    }
    .informacion {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
        height: 100%;
        padding: 40px;
        p {
            font-size: 16px;
        }
    }
    #ben-titulo {
        font-weight: 600;
    }
    #ben1 {
        background-color: #3E08C9;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%238008FC'/%3E%3Cstop offset='1' stop-color='%233E08C9'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%236108e2'/%3E%3Cstop offset='1' stop-color='%233E08C9'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=''%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform=''%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
        color: #fff;
    }
    #ben2 {
        background-color: #ED2820;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23C30A0A'/%3E%3Cstop offset='1' stop-color='%23ED2820'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23d81b15'/%3E%3Cstop offset='1' stop-color='%23ED2820'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=''%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform=''%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
        color: #fff;
    }
    #ben3 {
        background-color: #040202;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23040202' width='11' height='11'/%3E%3Crect fill='%23050303' x='10' width='11' height='11'/%3E%3Crect fill='%23060404' y='10' width='11' height='11'/%3E%3Crect fill='%23080505' x='20' width='11' height='11'/%3E%3Crect fill='%23090605' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%230a0606' y='20' width='11' height='11'/%3E%3Crect fill='%230b0707' x='30' width='11' height='11'/%3E%3Crect fill='%230d0808' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%230e0909' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%230f0a09' y='30' width='11' height='11'/%3E%3Crect fill='%230f0b0a' x='40' width='11' height='11'/%3E%3Crect fill='%23100c0b' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23110d0b' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23120d0c' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23130e0d' y='40' width='11' height='11'/%3E%3Crect fill='%23140f0d' x='50' width='11' height='11'/%3E%3Crect fill='%2314100e' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2315100f' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2316110f' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23161210' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23171210' y='50' width='11' height='11'/%3E%3Crect fill='%23181311' x='60' width='11' height='11'/%3E%3Crect fill='%23181311' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23191412' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23191512' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%231a1512' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%231a1613' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%231b1613' x='70' width='11' height='11'/%3E%3Crect fill='%231b1714' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%231c1714' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%231c1815' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%231d1815' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%231d1915' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%231e1a16' x='80' width='11' height='11'/%3E%3Crect fill='%231f1a16' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%231f1b16' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23201b17' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23201c17' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23211c17' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23211d18' x='90' width='11' height='11'/%3E%3Crect fill='%23211d18' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23221e19' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23221f19' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23231f19' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%2323201a' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%2324201a' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%2324211a' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%2325221b' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%2325221b' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%2325231c' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%2326231c' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%2326241c' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%2327251d' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%2327251d' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%2327261e' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%2328261e' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%2328271f' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%2328281f' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23292820' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23292920' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
        color: #fff;
    }
    #ben4 {
        background-color: #9B6700;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23a27000' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23a97900' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23b08300' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23b78d00' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23BE9800' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23c3a50b' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23c6b117' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23c7ba25' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23c7c135' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23BFBF4C' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
        color: #fff;
    }

`