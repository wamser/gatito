import React from 'react';
import {FlatList} from 'react-native';
import Item from './item';

const servicos =[
    {
        id:1,
        nome:"banho",
        preco:59.9,
        descricao: "sem descrição"
    },
    {
        id:2,
        nome:"vacina",
        preco:69.9,
        descricao: "sem descrição"
    },
    {
        id:3,
        nome:"tosa",
        preco:79.9,
        descricao: "sem descrição"
    },
    {
        id:4,
        nome:"anti pulga",
        preco:89.9,
        descricao: "sem descrição"
    }
];

export default function Servicos(){

    return (
        <>
        <FlatList
        data={servicos}
        renderItem={({item}) =><Item {...item}/>}
        keyExtractor={({id})=> String(id)}
        />
        </>
        );

}