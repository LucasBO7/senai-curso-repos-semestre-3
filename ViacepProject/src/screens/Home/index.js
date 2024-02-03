import React from 'react';
import { ScrollForm, ContainerForm } from "./style";
import { BoxInput } from "../../components/BoxInput";
import { FieldContentRow } from "../../components/BoxInput/style";
// import axios from "axios";
import { useEffect, useState } from "react";
import api from '../../services/Services';

export function Home() {
    // States - variáveis

    const [address, setAddress] = useState({
        cep: '',
        logradouro: null,
        bairro: null,
        cidade: null,
        estado: null,
        uf: null
    });



    // https://192.168.19.142:3000/cep

    // useEffect - funções
    useEffect(() => {
        if (address.cep.length === 8) {
            console.warn('Método executado!');
            getAddressInfos();
        }
    }, [address.cep])


    // Send a POST request
    async function getAddressInfos() {
        try {
            const promise = await api.get(`https://viacep.com.br/ws/${address.cep}/json/`);
            setAddress({
                ...address,
                logradouro: promise.data.logradouro,
                bairro: promise.data.bairro,
                cidade: promise.data.localidade,
                estado: promise.data.uf,
                uf: promise.data.uf,
            });
            console.warn('Salvo!');
        } catch (error) {
            console.log('UM ERRO OCORREU!');
        }
    }

    // Recebe as alterações no Input do CEP e as guarda no state "address"
    const handleCpfTextChanged = (event) => {
        setAddress({ ...address, cep: event });
    };

    return (
        <ScrollForm>
            <ContainerForm>
                {/* Como esta propriedade está com um destructuring, conseguimos acessá-las diretamente, o intelisense consegue visualizar as propriedades e podemos ver as propriedades ao colocar o cursor em cima do componente */}
                <BoxInput
                    textLabel='Informar CEP'
                    placeholder='Cep...'
                    editable={true}
                    keyType="numeric"
                    maxLength={9}
                    onChangeText={event => { handleCpfTextChanged(event) }}
                />

                <BoxInput
                    textLabel='Logradouro'
                    placeholder='Logradouro...'
                    fieldValue={address.cep}
                />

                <BoxInput
                    textLabel='Bairro'
                    placeholder='Bairro...'
                    fieldValue={address.bairro}
                />

                <BoxInput
                    textLabel='Cidade'
                    placeholder='Cidade...'
                    fieldValue={address.cidade}
                />

                <FieldContentRow>
                    <BoxInput
                        textLabel='Estado'
                        placeholder='Estado...'
                        fieldWidth={60}
                        direction={'row'}
                        fieldValue={address.estado}
                    />

                    <BoxInput
                        textLabel='UF'
                        placeholder='UF'
                        fieldWidth={30}
                        fieldValue={address.uf}
                    />
                </FieldContentRow>
            </ContainerForm>
        </ScrollForm>
    )
}