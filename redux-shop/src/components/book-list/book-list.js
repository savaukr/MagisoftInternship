import React, { Component } from 'react'
import './book-list.css'
import BookListItem from '../book-list-item'
import { connect } from 'react-redux'
import { withBookstoreService } from '../hoc'
import { booksLoaded } from '../../actions/index'

class BookList extends Component {
    componentDidMount() {
        // читання даних 
        const { bookstoreService } = this.props
        const data = bookstoreService.getBooks()
        // запис даних в store
        this.props.booksLoaded(data)
        
    }
    render() {
        const { books } = this.props
        return (
            <ul>
                {
                    books.map( (book) => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book} />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}
const mapDispatchToprops = (dispatch) => {
    return {
        booksLoaded: (newBooks) => {
            dispatch(booksLoaded(newBooks))
        }
    }
}
export default withBookstoreService()(connect(mapStateToProps, mapDispatchToprops)(BookList))