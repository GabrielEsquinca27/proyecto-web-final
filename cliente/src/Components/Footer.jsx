import React from 'react';
import styled from 'styled-components';
import tel from '../Img/tel.png';
import mail from '../Img/mail.png';
import facebook from '../Img/facebook.png';
import twitter from '../Img/twitter.png';
import tiktok from '../Img/tiktok.png';
import youtube from '../Img/youtube.png';

function Footer() {
    return (
        <>
            <DivContainer>
                    <div className="foo-contenido">
                        <div className="image">
                            <svg width="60" height="60" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#ffffff" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/>
                            </svg>
                        </div>
                        <div className="foo-info">
                            <p id='foo-titulo'>Contáctanos</p>
                            <div id='inf'>
                                <img src={tel}></img>
                                <p>+52 961 5555 555</p>
                            </div>
                            <div id='inf'>
                                <img src={mail}></img>
                                <p>cruzrojamexyaj@gmail.com</p>
                            </div>                 
                        </div>
                        <div className="info">
                            <p id='foo-titulo'>Síguenos en</p>
                            <div className="redes">
                                <a class="icon active">
                                    <i><img src={facebook}/></i>
                                </a>
                                <a class="icon active">
                                    <i><img src={twitter}/></i>
                                </a>
                                <a class="icon active">
                                    <i><img src={tiktok}/></i>
                                </a>
                                <a class="icon active">
                                    <i><img src={youtube}/></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="foo-final">
                        <p>2023 Cruz Roja Yajalón || Aviso Legal y Política de Privacidad</p>
                    </div>
            </DivContainer>
        </>
    );
}
export default Footer

const DivContainer = styled.div`
    box-sizing: border-box;
    user-select: none;
    ::selection {
        background: none;
    }
    ::-moz-selection {
        background: none;
    }
    width: 100%;
    .foo-contenido {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 220px;
        background: #181717;
        color: #fff;
        #foo-titulo {
            font-size: 20px;
            font-weight: 600;
        }
        .image {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30%;
            height: 100%;
        }
        .foo-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 30px;
            width: 30%;
            height: 100%;
            img {
                width: 22px;
            }
            #inf {
                overflow: hidden;
                display: flex;
                align-items: center;
                gap: 15px;
                img {
                    width: 24px;
                    height: 24px;
                }
            }
        }
        .info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 40%;
            height: 100%;
            padding: 30px;
            text-align: center;
            .redes {
                display: flex;
                justify-content: center;
                gap: 30px;
            }
            .icon {
                display: inline-flex;
                width: 60px;
                height: 60px;
                text-decoration: none;
                font-size: 26px;
                color: #fff;
                border-radius: 50%;
                outline: 2px solid #fff;
                transition-property: outline-offset, outline-color, background-color;
                transition-duration: 0.2s;
                i {
                    margin: 14px;
                }
                img {
                    width: 32px;
                }                
            }
            .icon:hover {
                outline-offset: 4px;
                img {
                    transform: scale(1.2);
                    transition: all 0.5s;
                }
            }
            .active:hover {
                background-color: #e02929;
                outline-color: #e02929;
            }
        }
        @media (max-width: 900px) {
            display: inline;
            .image, .foo-info, .info {
                width: 100%;
                height: 200px;
                background: #181717;
            }
        }
    }
    .foo-final {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        width: 100%;
        height: 100px;
        padding: 20px;
        background: #0D0C0C;
        color: #fff;
        p {
            text-align: center;
        }
    }
`