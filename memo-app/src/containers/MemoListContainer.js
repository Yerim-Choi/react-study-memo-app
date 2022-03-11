import MemoList from 'MemoList';
import React, { Component } from 'react';
import { connect } from 'react-redux';


class MemoListContainer extends Component {
    render() {
        const { memos } = this.props;

        return (
            <MemoList
                memos={memos}
            />
        );
    }
}

export default connect(
    (state) => ({
        memos: state.memo.get('data')
    })
)(MemoListContainer);