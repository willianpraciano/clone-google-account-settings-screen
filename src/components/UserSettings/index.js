import React, { useState } from 'react';

import { Container } from './styles';

import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

function UserSettings(props) {
  return (
    <Container>
      <header>
        <h1>Configurações de conta</h1>
        <p>Configure os dados de acesso da sua conta.</p>
      </header>

      <div className="informations">
        <div className="info-header">
          <h4>Minha Conta</h4>
          <p>
            Algumas informações podem estar visíveis para outras pessoas que
            estejam usando os serviços do Google.{' '}
          </p>
        </div>
        <div className="button">
          <h5>NOME</h5>
          <p>Willian Pracinao</p>
          <ArrowForwardIosRoundedIcon />
        </div>
        <div className="button">
          <h5>EMAIL</h5>
          <p>willian.s.praciano@gmail.com</p>
          <ArrowForwardIosRoundedIcon />
        </div>
        <div className="button">
          <h5>SENHA</h5>
          <p>*******</p>
          <ArrowForwardIosRoundedIcon />
        </div>
      </div>
    </Container>
  );
}

export default UserSettings;
