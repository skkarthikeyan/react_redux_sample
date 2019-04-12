import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App'
import Posts from './components/Posts'
import PostForm from './components/PostForm'

function index() {
    return <p>
       Home
    </p>
}

function aboutUs() {
    return <p>
        About us
    </p>
}

function contactUs() {
    return <p>
        Contact Us
    </p>
}

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/contact/">Contact</Link>
                        </li>
                    </ul>
                </nav>
            <Route path='/' exact component= {index}/>
            <Route path='/about/' component= {Posts}/>
            <Route path='/contact/' component= {PostForm}/>    
            </div>
        </Router>
    )
}

export default AppRouter;