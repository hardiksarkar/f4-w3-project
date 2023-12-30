import React from 'react'
import "./bookstore.css"

export default function Bookstore({morebooks}) {

    const bookApi = "https://www.googleapis.com/books/v1/volumes?q=";
    // console.log(morebooks);

    function onBookClick(link){
      window.open(link,'_blank');
    }

  return (
    <div>
      <div></div>
      <div className='more-books-container'>
        <h3>More Books</h3>
        <div className='more-books'>
            {
                morebooks.map((book)=>{
                  // console.log(book.id);
                    return <img onClick={()=>onBookClick(book.volumeInfo.infoLink)} className='books' src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} key={book.id}/>
                })
            }
        </div>
      </div>
    </div>
  )
}
