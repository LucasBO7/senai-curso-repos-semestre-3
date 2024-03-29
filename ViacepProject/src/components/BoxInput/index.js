import { FieldContent } from "./style";
import { Label } from "../Label";
import { Input } from "../Input";

// fieldWidth --> recebe a propriedade width do componente "BoxInput"
// labelText --> Texto da label do input
export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText,
    keyType = 'default',
    maxLength
}) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>
            <Label textLabel={textLabel} />

            <Input
                editable={editable}
                placeholder={placeholder}
                keyType={keyType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
            />
        </FieldContent>
    );
}