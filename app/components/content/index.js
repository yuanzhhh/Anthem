import React from 'react';
import BaseCom from '@/app/components/BaseComponent';
import styled from 'styled-components';
import Anthem from './anthem';

const Container = styled.div `
    width:100%;
    background:#fff;
    border-top:1px #e8e8e8 solid;
    position: relative;
`;

class anthemContent extends BaseCom {
    render() {
        return (
            <Container>
                <Anthem/>
            </Container>
        )
    }
};

export default anthemContent;