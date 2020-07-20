import React, {useState, useEffect, useContext} from 'react'

const Search = () => {
    const [books, setBooks] =  useState([]);
    
    useEffect(() => {
        loadBooks()
    }, [])

    const loadBooks = () => {

    }

    const handleChange = () => {

    }

    return (
        <section className="container">
            <div className="card">
                <article className="card-body">
        <form>
            <div className="form-group">
                <label for="Book">Book</label>
                <input type="text" className="form-control"/>  
            </div>  
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
                </article>
            </div>
        </section>
        
        
            
       
    )
}

export default Search
