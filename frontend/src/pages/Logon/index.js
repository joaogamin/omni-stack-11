import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import './styless.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Logon() {

    const history = useHistory();
    const [id, setId] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/perfil');
        } catch (err) {
            alert(`Erro no login, tente novamente. ${err}`);
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/cadastro">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}