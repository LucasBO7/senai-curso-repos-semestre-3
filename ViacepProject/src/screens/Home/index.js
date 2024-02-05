import React from 'react';
import { ScrollForm, ContainerForm } from "./style";
import { BoxInput } from "../../components/BoxInput";
import { FieldContentRow } from "../../components/BoxInput/style";
import { useEffect, useState } from "react";
import api from '../../services/Services';

export function Home() {
    // States - variáveis

    // https://brasilaberto.com/docs/v1/zipcode

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
            getAddressInfos();
        }
    }, [address.cep])

    // Recebe a Sigla retornada pela api e retorna em nome completo
    function getStateName(stateName) {
        let nomeCompleto;
        switch (stateName) {
            case 'AC':
                nomeCompleto = 'Acre';
                break;
            case 'AL':
                nomeCompleto = 'Alagoas';
                break;
            case 'AP':
                nomeCompleto = 'Amapá';
                break;
            case 'AM':
                nomeCompleto = 'Amazonas';
                break;
            case 'BA':
                nomeCompleto = 'Bahia';
                break;
            case 'CE':
                nomeCompleto = 'Ceará';
                break;
            case 'DF':
                nomeCompleto = 'Distrito Federal';
                break;
            case 'ES':
                nomeCompleto = 'Espírito Santo';
                break;
            case 'GO':
                nomeCompleto = 'Goiás';
                break;
            case 'MA':
                nomeCompleto = 'Maranhão';
                break;
            case 'MT':
                nomeCompleto = 'Mato Grosso';
                break;
            case 'MS':
                nomeCompleto = 'Mato Grosso do Sul';
                break;
            case 'MG':
                nomeCompleto = 'Minas Gerais';
                break;
            case 'PA':
                nomeCompleto = 'Pará';
                break;
            case 'PB':
                nomeCompleto = 'Paraíba';
                break;
            case 'PR':
                nomeCompleto = 'Paraná';
                break;
            case 'PE':
                nomeCompleto = 'Pernambuco';
                break;
            case 'PI':
                nomeCompleto = 'Piauí';
                break;
            case 'RJ':
                nomeCompleto = 'Rio de Janeiro';
                break;
            case 'RN':
                nomeCompleto = 'Rio Grande do Norte';
                break;
            case 'RS':
                nomeCompleto = 'Rio Grande do Sul';
                break;
            case 'RO':
                nomeCompleto = 'Rondônia';
                break;
            case 'RR':
                nomeCompleto = 'Roraima';
                break;
            case 'SC':
                nomeCompleto = 'Santa Catarina';
                break;
            case 'SP':
                nomeCompleto = 'São Paulo';
                break;
            case 'SE':
                nomeCompleto = 'Sergipe';
                break;
            case 'TO':
                nomeCompleto = 'Tocantins';
                break;
            default:
                nomeCompleto = 'Estado não encontrado';
        }
        return nomeCompleto;
    }


    // Send a POST request
    async function getAddressInfos() {
        try {
            const promise = await api.get(`https://viacep.com.br/ws/${address.cep}/json/`);
            setAddress({
                ...address,
                logradouro: promise.data.logradouro,
                bairro: promise.data.bairro,
                cidade: promise.data.localidade,
                estado: getStateName(promise.data.uf),
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
                    onChangeText={event => setAddress({ ...address, cep: event })}
                />

                <BoxInput
                    textLabel='Logradouro'
                    placeholder='Logradouro...'
                    fieldValue={address.logradouro}
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