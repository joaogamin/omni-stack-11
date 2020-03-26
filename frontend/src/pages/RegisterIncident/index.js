import React, {useState} from 'react';
import './styless.css';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

export default function RegisterIncident() {

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[value, setValue] = useState('');

    async function handleRegisterIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }
        try {
            await api.post(
                'incidents', 
                data, 
                {
                    headers:{
                        Authorization: ongId,    
                    }
                }
            );
            history.push('/perfil');
        } catch (err) {
            alert(`Erro no cadastro, tente novamente. ${err}`);
        }
    }

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
                    <input placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
                    <input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)}/>

                    <button className="button" type="submit" onClick={handleRegisterIncident}>Cadastrar</button>
                    
                </form>
            </div>
        </div>
    );
}