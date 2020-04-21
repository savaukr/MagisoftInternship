import React, {Component} from 'react';
import styled from 'styled-components';

const ErrorDiv = styled.div`
        padding: 0.5rem 1rem;
        margin: 0 auto;
        max-width:200px;
        font-size: 1.2rem `;
         
const SpanBoom = styled.span`
    margin: 0 1rem;
    color: rgb(200,100,100)`;
const SpanSimple = styled.span`
    font-size: 0.8rem;
    color: rgb(220,200,70)`;

class  ErrorIndicator extends Component {
    render() {
        return (
            <ErrorDiv>
                <SpanBoom>BOOM!</SpanBoom>
                <SpanSimple>Something has gone terribly wrong</SpanSimple>
                <SpanSimple>(but we alredy sent droids to fix it</SpanSimple>
            </ErrorDiv>
        )
    }
}
export default ErrorIndicator;