import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className="home__image" src='https://bvuniversity.edu.in/images/white-background2.jpg' alt=''></img>
            </div>
            
            <div className='home__row'>
                <Product />
                {/*product 2 */}

            </div>

            <div className='home__row'>
                {/*product 1*/}
                {/*product 2 */}

            </div>
            
        </div>
    )
}

export default Home
