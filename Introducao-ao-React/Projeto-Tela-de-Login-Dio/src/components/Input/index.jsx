import React from 'react';

import { ErrorText, IconContainer, InputContainer, InputText } from './styles';
import { Controller } from "react-hook-form";

const Input = ({leftIcon, name, control, errorMenssage, ...rest}) => {
    return (
        <>
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>): null}
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => <InputText {...field} {...rest} />}
            />
        </InputContainer>
        {errorMenssage ? <ErrorText>{errorMenssage}</ErrorText> : null}
        </>
    )
}

export { Input }