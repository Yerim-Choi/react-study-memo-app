import React, { Component } from 'react';
import { InputPlaceholder, WhiteBox } from 'components/WriteMemo';

class WriteMemo extends Component {
    render() {
        return (
            <WhiteBox>
                <InputPlaceholder />
            </WhiteBox>
        );
    }
}

export default WriteMemo;