import React from 'react';

import {SafeAreaView,StatusBar,KeyboardAvoidingView,Platform} from 'react-native';
import estilosGlobal,{cores} from '../../estilos';
import estilos from './estilos';

export default function TelaPadrao({children}){

return <>
<SafeAreaView style={estilos.ajusteCabecalho}>
            <StatusBar backgroundColor={cores.roxo}/>
        <KeyboardAvoidingView
         behavior={Platform.OS =="ios" ? "padding" : "height"}
         style={estilos.ajusteCabecalho}>
    {children}
    </KeyboardAvoidingView>
    </SafeAreaView>
<SafeAreaView style={estilos.ajustaRodape}/>
</>

}