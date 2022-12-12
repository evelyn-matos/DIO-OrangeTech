import React from 'react';

import { ErrorText, IconContainer, InputContainer, InputText } from './styles';
import { Controller } from "react-hook-form";
import { IInput } from './types'

const Input = ({leftIcon, name, control, errorMenssage, ...rest}: IInput) => {
    return (
        <>
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>): null}
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field: {value, onChange} }) => <InputText value={value} onChange={onChange} {...rest} />}
            />
            
        </InputContainer>
        {errorMenssage ? <ErrorText>{errorMenssage}</ErrorText> : null}
        </>
    )
}

export { Input }