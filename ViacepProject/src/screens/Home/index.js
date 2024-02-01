import { ScrollForm, ContainerForm } from "./style";
import { BoxInput } from "../../components/BoxInput";

export function Home() {
    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel='informar CEP'
                    placeholder='Cep...'
                />
            </ContainerForm>
        </ScrollForm>
    )
}