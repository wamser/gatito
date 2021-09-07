import React from 'react';
import Rotas from './src/Rotas';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import TelaPadrao from './src/componentes/TelaPadrao';
import reactotron from 'reactotron-react-native';

reactotron.configure().useReactNative().connect();
console.tron = reactotron;
export default function App() {
  console.tron.log("teste");
  return (
    <TelaPadrao>
    <Rotas/>
    </TelaPadrao>
  );
}