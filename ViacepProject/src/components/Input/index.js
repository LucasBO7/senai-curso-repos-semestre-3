import { BoxInput, InputBar, InputLabel } from "./style";

export function Input({ labelText }) {
    return (
        <BoxInput>
            <InputLabel>{labelText}</InputLabel>
            <InputBar></InputBar>
        </BoxInput>
    );
}