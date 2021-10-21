import React from 'react';
import styled from 'styled-components'
import imagen from '../../../../../img/images.png'

const BoxDiv = styled.div`
display: inline-flex;

width: 194px;
position: relative;
margin-left: 19.5px;
align-items: center;


 `

const ImgPerfil = styled.div`
width: 44px;
height: 44px;
border-radius: 6px;
margin-top: 2px;
margin-right: 10px;
background-size: contain;
background:url(${imagen}); 


`
const TextPerfil = styled.div`
width: 100px;
height: 44px;
display: block;
padding-top:3px;


`

const TextUser = styled.p`
margin-top:10px;
margin:0px;
padding:0px;
color: #484848;
font-size:14px;
font-weight: 700;
font-family: Roboto;

`


const TextRol = styled(TextUser)`
color: #A1A1A1;
font-weight: 400;

`

const IconArrow = styled.i`

color: #DADADA;
width: 9px;
cursor:pointer;
height: 12px;

`

const InfoUser = () => {
    return (
        <BoxDiv>
            <ImgPerfil />
            <TextPerfil>
                <TextUser>ProclubApp</TextUser>
                <TextRol>SuperAdmin</TextRol>
            </TextPerfil>
            <IconArrow className="fas fa-chevron-down"></IconArrow>
        </BoxDiv>
    );
}

export default InfoUser;