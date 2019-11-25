import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'The Name of The Wind', id: 1 },
        { title: 'The Great Gatsby',     id: 2 },
        { title: 'The Dark Knight',      id: 3 }
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;