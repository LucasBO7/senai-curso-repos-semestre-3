import styled from "styled-components";

export const FieldContent = styled.View`
    width: ${props => `${props.fieldWidth}%`} ;
    flex-direction: ${props => `${props.direction}`} ;
`

export const FieldContentRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`