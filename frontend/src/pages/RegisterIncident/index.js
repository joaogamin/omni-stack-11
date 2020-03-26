import React from 'react';
import './styless.css';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';

export default function RegisterIncident() {

    return(
        <div className="registerIncident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva i casi detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/perfil">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o inicio 
                    </Link>
                </section>
                <form>
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>

                    <button className="button" type="submit">Cadastrar</button>
                    
                </form>
            </div>
        </div>
    );
}