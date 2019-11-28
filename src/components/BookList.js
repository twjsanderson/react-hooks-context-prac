import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
    // useContext grabs all value props passed into the ThemeContext Object
    const { theme } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const styles = theme.isLightTheme ? theme.light : theme.dark;

    return (
        <div className="book-list" style={{ color: styles.syntax, background: styles.bg }}>
            <ul>
                {
                    books.map(book => {
                        return (
                            <li key={ book.id } style={{ background: styles.ui }}>{ book.title }</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default BookList;