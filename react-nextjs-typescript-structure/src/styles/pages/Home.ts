import styled from "styled-components";

export const Container = styled.div`

`;

export const CardContent = styled.div`

.principalContent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.campaign-card {
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 20px;
  width: 510px;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
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
}

h1 {
  margin-bottom: 2%;
}

.percentage-item h3 {
  font-size: 16px;
  margin: 5px 0;
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
