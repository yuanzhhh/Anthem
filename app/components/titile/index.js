import React from 'react';
import BaseCom from '@/app/components/BaseComponent';
import styled from 'styled-components';

const TitleContainer = styled.div `
    width: 100%;
    position: relative;
    background: #ffffff;
    display: block;
    clear:both;
    &>.title_content{
        display: block;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
        .AnthemName{
            font-weight: bold;
            font-size: 1.3rem;
            padding-left:0.2rem;
        }
        li{
            padding: 0.2rem;
            padding-left:1rem;
            text-index:0.5rem;
        }
    }
`;

class Title extends BaseCom {
    render() {
        return (
            <TitleContainer>
                <ul className='title_content'>
                    <li className='AnthemName'>Anthem</li>
                    <li>redux</li>
                    <li>react-redux</li>
                    <li>immutable</li>
                    <li>styled-components</li>
                </ul>
            </TitleContainer>
        );
    }
}

export default Title;