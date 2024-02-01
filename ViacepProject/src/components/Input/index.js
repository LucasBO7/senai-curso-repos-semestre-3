import { InputText } from "./style";

export const Input = ({
    placeholder,
    editable,
    fieldValue,
    onChangingText,
    keyType,
    maxLength
}) => {
    return (
        <>
            <InputText
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyType}
                maxLength={maxLength}
                value={fieldValue}
                onChangeText={onChangingText}
            />
        </>
    )
}