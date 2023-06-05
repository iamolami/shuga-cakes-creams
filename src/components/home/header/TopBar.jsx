import React from 'react'

const TopBar = () => {
  return (
    <div className='header__topBar'>
        <div className="container">
            <div className="header__topBar-left">
                <p>
                    460 West 34th Street, Lagos State, Nigeria - Hotline: +234-814-170-0260 - +234-915-246-0899
                </p>
            </div>
            <div className="header__topBar-right">
                <div className="header__topBar-currency">
                    <a href="/" className='header__topBar-dropdown'>
                        <span>USD</span>
                    </a>
                </div>
                <ul className="header__topBar-social">
                    <li>
                        <a href="/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="/"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
      </div>
    </div>
  )
}

export default TopBar
