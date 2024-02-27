import styled from "styled-components";

export const DoctorContainer = styled.View.attrs({
    shadowcolor: "#000",
    shadowOffset: {
        width: 4,
        height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 8,
})`
    justify-content: center;
    align-items: center;
    flex-direction: row;

    height: 102px;
    width: 90%;
    margin: 5px 5%;
    padding: 14px 0px;

    border-radius: 10px;
    background-color: white;

    margin-bottom: 12px;
`;