import React from 'react';
import {FlatList} from 'react-native';
import Item from './item';
import StatusCarrinho from '../../componentes/StatusCarrinho';

const servicos =[
    {
        id:1,
        nome:"banho",
        preco:59.9,
        descricao: "sem descrição",
        quantidade:1
    },
    {
        id:2,
        nome:"vacina",
        preco:69.9,
        descricao: "sem descrição",
        quantidade:2
    },
    {
        id:3,
        nome:"tosa",
        preco:79.9,
        descricao: "sem descrição",
        quantidade:3
    },
    {
        id:4,
        nome:"anti pulga",
        preco:89.9,
        descricao: "sem descrição",
        quantidade:4
    }
];

export default function Carrinho(){
    const total= servicos.reduce((soma,{preco,quantidade})=>soma + (preco * quantidade),0);
    return (
        <>
        <StatusCarrinho total={total}/>
        <FlatList
        data={servicos}
        renderItem={({item}) =><Item {...item}/>}
        keyExtractor={({id})=> String(id)}
        />
        </>
        );

}