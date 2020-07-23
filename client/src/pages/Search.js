import React, {useState, useEffect, useContext, Component} from 'react'
import Results from '../components/Results'
import API from '../utils/API'
class Search extends Component{
    state = {
        books: [],
        value: ''
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    // createBooks = data => {
    //     return {
    //         _id: data.id,
    //         authors: data.volumeInfo.authors,
    //         description:volumeInfo.authors,
    //         image: data.volumeInfo.imageLinks.thumbnail,
    //         link: data.volumeInfo.previewLink
    //     }
    // }
    searchBooks = () => {
        API.getBooks(this.state.value)
        .then(res => this.setState({books: res.data}))
        .catch((err)=> console.log(err))
    }

    handleSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    }

  
    render() {
        return (
        <>
        <section className="container">
            <div className="card">
                <article className="card-body">
        <form>
            <div className="form-group">
                <label htmlFor="Book">Book</label>
                <input type="text" className="form-control"  name='value' value={value} onChange={this.handleInputChange} />  
            </div>  
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
        </form>
                </article>
            </div>
        </section>
        
        <section className="container">
           

        </section>
        
       </>
        )
    } 
}

export default Search
