import React from 'react'
import '../css/Homepage.css'
import { useState, useEffect } from 'react';
import profileimage from '../images/ahmedprofileimage.jpg'

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const body = document.body;
        const darkModeToggle = document.getElementById('darkModeToggle');

        const storedDarkMode = localStorage.getItem('darkMode') === 'enabled';
        setIsDarkMode(storedDarkMode);

        if (storedDarkMode) {
            body.classList.add('dark-mode');
        }

        darkModeToggle.addEventListener('change', () => {
            const isChecked = darkModeToggle.checked;
            setIsDarkMode(isChecked);
            if (isChecked) {
                body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            }
        });

        return () => {
            darkModeToggle.removeEventListener('change', () => { });
        };
    }, []); // Empty dependency array ensures this effect runs only once after initial render


    return (
        <div className={isDarkMode ? 'dark-mode' : ''}>
            <header class="container">
                <div class="page-header">
                    <div class="logo">
                        <a href="1/">Portfolio.</a>
                    </div>
                    <input type="checkbox" id="click" />

                    <label for="click" class="mainicon">
                        <div class="menu">
                            <i class='bx bx-menu'></i>
                        </div>
                    </label>
                    <ul>
                        <li><a href="1/" className="active" style={{ '--navAni': 1 }}>Home</a></li>
                        <li><a href="2/" style={{ '--navAni': 2 }}>About</a></li>
                        <li><a href="3/" style={{ '--navAni': 3 }}>Skills</a></li>
                        <li><a href="4/" style={{ '--navAni': 4 }}>Portfolio</a></li>
                        <li><a href="5/" style={{ '--navAni': 5 }}>Contact</a></li>
                    </ul>
                    <label class="mode">
                        <input type="checkbox" id="darkModeToggle" />
                        <i class='bx bxs-moon'></i>
                    </label>
                </div>
            </header>


            <section class="container">
                <div class="main">
                    <div class="detail">
                        <h3>Hi, It's Me</h3>
                        <h1>I'm <span style={{ color: "#f9532d" }}>Malik</span></h1>
                        <p>I'm a professional Fronten dWeb Developer. Our Main Goal to help & Satisficed the Local & Global Clients by
                            web development solutions
                        </p>
                        <div className="social">
                            <a href="https://www.linkedin.com/in/malikatonda" style={{ '--socialAni': 1 }}><i className='bx bxl-linkedin'></i></a>
                            <a href="https://www.instagram.com/malikahmed106/" style={{ '--socialAni': 2 }}><i className='bx bxl-instagram'></i></a>
                            <a href="https://github.com/adeshinamalik" style={{ '--socialAni': 3 }}><i className='bx bxl-github'></i></a>
                            <a href="4/" style={{ '--socialAni': 4 }}><i className='bx bxl-twitter'></i></a>
                        </div>
                    </div>
                    <div class="img-sec">
                        <div class="images">
                            <div className='image-container'>
                                <img src={profileimage} alt="" class="img-w" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default Home