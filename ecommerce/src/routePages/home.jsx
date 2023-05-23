import {  Link } from "react-router-dom";
import Footer from "../footer";
export default function Home(){
    return(
        <>
        <div className="home-container">
      <img src="https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-218640948.jpg" alt='img' width="400px"/>

        <div className="home-container s1">
          <h2>
            Welcome To <span> Books <span><span>C</span>orner</span></span>
          </h2>
          <p>Choose From Our Librery</p>

          <a href="/">
            <Link to="allProducts">
              {" "}
              <button className="home-container s1 bttn">Explore</button>
            </Link>
          </a>
        </div>
        <div className="home-container2">
          <h2>Book Categories</h2>
          <p>
            There are 3 categories of books available in our website. Choose
            according to your taste
          </p>
          <Link to='/cooking' >
            <button>
              <h4>Cooking</h4>
            </button>
          </Link>
          <Link  to='/programming'>
            <button>
              <h4 className="programming">Programming</h4>
            </button>
          </Link>
          <Link to='/politics'>
            <button>
              <h4>Politics</h4>
            </button>
          </Link>
        </div>
      </div>
      <Footer/>
      
        </>
    )
}