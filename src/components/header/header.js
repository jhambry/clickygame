import React from 'react';
import FadeIn from '../transitions/fade-in';

const Header = () => { return(
    <header className="App-header">
        <FadeIn in={true} duration={600} length={'40px'} direction={'bottom'}>
            <h1>Philadephia Eagles Clicky Game</h1>
        </FadeIn>
       
        
    </header>
)};

export default Header;