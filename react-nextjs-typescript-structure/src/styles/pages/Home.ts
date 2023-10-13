import styled, { keyframes } from 'styled-components';

const backgroundAnimation = keyframes`
  0% {
    background-color: #ff0000; /* Vermelho */
  }
  50% {
    background-color: #e60000; /* Vermelho mais escuro */
  }
  100% {
    background-color: #ff0000; /* Voltar para vermelho */
  }
`;

export const Container = styled.div`

`;

export const CardContent = styled.div`
.principalContent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url('https://web.whatsapp.com/c6f3eaf3-2fc8-4358-9887-25ccfe76b866'); /* Caminho para a imagem de fundo */
  background-size: cover; /* Ajusta o tamanho da imagem ao contêiner */
  background-position: center; /* Centraliza a imagem no contêiner */
  background-repeat: no-repeat; /* Impede que a imagem seja repetida */
}

.campaign-card {
  background: #fff;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 20px;
  width: 40%; /* 48% para deixar um espaço mínimo entre as duas divs */
  margin-bottom: 20px;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  justify-content: center;
}

.campaign-card:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.campaign-card.clicked {
  background-color: white;
}

.base {
  font-size: 20px;
  margin-bottom: 10px;
}

/* Estilo dos detalhes de campanha expandidos */
.campaign-percentages {
  display: none;
}

.campaign-card.clicked .campaign-percentages {
  display: block;
  margin-top: 10px;
}

.percentage-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Esconde o conteúdo que transborda */
  text-overflow: ellipsis; /* Mostra "..." para indicar que o texto foi cortado */
  white-space: nowrap; 
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(271deg, #ff2a2a, #a32626);
}

h1 {
  margin-bottom: 3%;
}

.percentage-item h3 {
  font-size: 16px;
  margin: 5px 0;
}

.com-aviso {
  border: 2px solid red; /* ou qualquer estilo que você deseja para o aviso */
}

/* Estilos para porcentagens */
.porcentagem-vermelha {
  color: red;
  font-weight: bold;
}

.porcentagem-verde {
  color: green;
  font-weight: bold;
}

.nav-links{
  display: flex;
  align-items: center;
  background: #fff;
  padding: 20px 15px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  margin-top: 3%;
  margin-bottom: 3%;
}
.nav-links li{
  list-style: none;
  margin: 0 12px;
}
.nav-links li a{
  position: relative;
  color: #333;
  font-size: 25px;
  font-family:'open_sansregular';  
  font-weight: 500;
  padding: 6px 0;
  text-decoration: none;
}
.nav-links li a:before{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: red;
  border-radius: 12px;
  transition: all 0.4s ease;
}
.nav-links li a:hover:before{
  width: 100%;
}
.nav-links li.center a:before{
  left: 50%;
  transform: translateX(-50%);
}
.nav-links li.upward a:before{
  width: 100%;
  bottom: -5px;
  opacity: 0;
}
.nav-links li.upward a:hover:before{
  bottom: 0px;
  opacity: 1;
}
.nav-links li.forward a:before{
  width: 100%;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}
.nav-links li.forward a:hover:before{
  transform: scaleX(1);
  transform-origin: left;
}

.logo {
  width: 120px;
  height: 120px;
  margin-top: 3%;
}


`
