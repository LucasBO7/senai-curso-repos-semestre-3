import React, { useState } from 'react';
import { DropdownContainer, OptionPicker } from './Style';

export const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const placeholder = {
        label: 'Selecionar horário...',
        value: null,
    };

    const options = [
        { label: '08:00', value: '08:00' },
        { label: '09:30', value: '09:30' },
        { label: '11:00', value: '11:00' },
    ];

    return (
        <DropdownContainer>
            <OptionPicker
                placeholder={placeholder}
                items={options}
                onValueChange={(value) => setSelectedValue(value)}
                value={selectedValue}
            />
        </DropdownContainer>
    );
};