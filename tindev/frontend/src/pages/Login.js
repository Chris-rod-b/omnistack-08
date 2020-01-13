import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }){
    const [getUsername, setUsername] = useState('');
    
    async function handleSumit(e){
        e.preventDefault();

        const response = await api.post('/devs', {
            username: getUsername,
        });

        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSumit}>
                <img src={logo} alt="Tindev"/>
                <input 
                    placeholder="Digite seu usuário no Github"
                    value={getUsername}
                    onChange={ e => setUsername(e.target.value) }
                />
                <button type="submit"> Enviar</button>
            </form>
        </div>
    );
}
//react é isso: Componente, Estado e Propriedades