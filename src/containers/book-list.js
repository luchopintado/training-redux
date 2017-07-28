import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

    renderList () {
        return this.props.books.map(book => {
            return <li
                key={`book-${book.title}`}
                className="list-group-item"
                onClick={() => this.props.selectBook(book)}
            >
                {book.title}
            </li>;
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps (state) {
    // Whatever is retuned will be show up as props inside BookList
    return {
        books: state.books
    };
}


// Anything returned from this function wll end up as props on the booklist container
function mapDispatchToProps (dispatch) {
    // Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({'selectBook': selectBook}, dispatch);
}

// Promote Booklist from a component to a container
// It need to know about the dispatch method, selectBook.
// Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
