import { ScrollForm, ContainerForm } from "./style";
import { BoxInput } from "../../components/BoxInput";
import { FieldContentRow } from "../../components/BoxInput/style";
// import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

export function Home() {
    // States - variáveis
    const [cep, setCep] = useState();
    // https://192.168.19.142:3000/cep

    const [address, setAdress] = useState({
        logradouro: null,
        bairro: null,
        cidade: null,
        estado: null,
        uf: null
    });


    // useEffect - funções
    useEffect(() => {
        console.warn(address.cep);
    }, [address.cep])


    // Send a POST request
    //#region post
    // axioss({
    //     method: 'get',
    //     url: `viacep.com.br/ws/:${cep}/json/`,
    //     data: {
    //         firstName: 'Fred',
    //         lastName: 'Flintstone'
    //     }
    // });
    //#endregion


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
                    onChangeText={(c) => {
                        setAdress((prevState) => ({
                            ...prevState,
                            cep: c
                        }))
                    }}
                />

                <Text>Teste: {address.cep}</Text>

                <BoxInput
                    textLabel='Logradouro'
                    placeholder='Logradouro...'
                />

                <BoxInput
                    textLabel='Bairro'
                    placeholder='Bairro...'
                />

                <BoxInput
                    textLabel='Cidade'
                    placeholder='Cidade...'
                />

                <FieldContentRow>
                    <BoxInput
                        textLabel='Estado'
                        placeholder='Estado...'
                        fieldWidth={60}
                        direction={'row'}
                    />

                    <BoxInput
                        textLabel='UF'
                        placeholder='UF'
                        fieldWidth={30}
                    />
                </FieldContentRow>
            </ContainerForm>
        </ScrollForm>
    )
}