import React from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

function Header() {
    return (
        <header>
            <h1>Welcome to Home Tiffin Landing Page</h1>
            <br>
            </br>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

function About() {
    return (
        <section id="about">
            <h2>About Us</h2>
            <br>
            </br>
            <img src="Indian.jpg" alt="Try Again!" id="I1">
            </img>
            <p>Welcome to Home Tiffin Service!We provide delicious, homemade meals delivered straight to your door.</p>
            <p>Our mission is offer convenient, healthy, and affordable meal options for busy individuals and families.</p>
        </section>
    );
}

function App() {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
