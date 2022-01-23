import React from 'react';
import './Header.css';

class Header extends React.Component<{}, {}> {

    render() {
        return (
            <div className={'header'}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     version="1.1" baseProfile="full"
                     width="100%" height="7.5%" viewBox="0 0 1000 75"
                     className={'header-tiles'}>

                    <path d="M0 0 L0 50 L 250 50 L 275 25 L 725 25 L 750 50 L 975 50 L 1000 75 L 1000 0 L 0 0"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg"
                     version="1.1" baseProfile="full"
                     style={{marginTop: 500}}
                     width="100%" height="5%" viewBox="0 0 1000 50"
                     className={'footer-tiles'}
                >


                    <path d="M0 25 L 250 25 L 275 0 L 725 0 L 750 25 L 975 25 L 1000 50 L 0 50 L 0 25"/>
                </svg>
            </div>
        );
    }

}

export default Header;
