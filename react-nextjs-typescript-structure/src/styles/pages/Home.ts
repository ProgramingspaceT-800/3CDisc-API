import styled from "styled-components";

export const Container = styled.div`

`;

export const CardContent = styled.div`

.principalContent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.campaign-card {
  background-color: #fff;
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
  background-color: #f5f5f6;
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
  margin-top: 3%;
}

h1 {
  margin-bottom: 3%;
}

h1 {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 100%;
  }

  to {
    margin-left: 0%;
    width: 30%;
  }
}

.title h1 { 
	display:inline-block; 
	font-family:'open_sansregular';  
	color: #CC0000; 
	margin-top:0; 
	margin-bottom: 3%;
}
.title h1::after {
    content:'';
    display: block;
    position: relative;
    top: 5px;
    width: 100%;
    height: 5px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-image: -webkit-linear-gradient(left,#00d8e0 0,#028085 100%);
    background-image: -o-linear-gradient(left,#00d8e0 0,#028085 100%);
    background-image: linear-gradient(to right,#00d8e0 0,#028085 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00d8e0', endColorstr='#028085', GradientType=1);
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
`
