import React from 'react';
import './Header.css';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
function Header() {
    return (
        <div className='header'>
            <img 
                className="header__logo"
                src="http://bvcoe.bharatividyapeeth.edu/media/images/bvcoe_logo_3.png" 
            />
            <div className='header__bvcoeAddress'>
                <span className='header__optionLineOne'>
                    <p>Bharati Vidyapeeth's College Of Engineering</p>
                    <p>Lavale, PUNE - 412115</p>
                    <p>Affiliated to Savitribai Phule Pune University</p>
                    <p>Approved by AICTE, New Delhi and DTE, Government Of Maharashtra, Mumbai &ensp;</p>
                  </span>



            </div>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <PersonSearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
              <div className='header__option'>
                  <span className='header__optionLineOne'>
                      Hello Guest
                    </span>
                    
                    <span className='header__optionLineTwo'>
                      Sign In
                    </span>

                </div> 

              <div className='header__option'>
                    <span className='header__optionLineOne'>
                      About
                    </span>
                    
                    <span className='header__optionLineTwo'>
                        Us
                    </span>

              </div>

              <div className='header__option'>
                    <span className='header__optionLineOne'>
                      Contact
                    </span>
                    
                    <span className='header__optionLineTwo'>
                      Us
                    </span>


              </div>
              
              <div className='header__option'>
                    <span className='header__optionLineOne'>
                      Media
                    </span>
                    
                    <span className='header__optionLineTwo'>
                      & News
                    </span>
                </div>

                <div className='header__optionBasket'>
                    <AttachMoneyIcon/>
                    <span className='header__optionLineTwo header__basketCount'>0</span>

                </div>


             


            </div>
        </div>
    );
}

export default Header
