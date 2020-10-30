import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


const AlphabetLink = ({ href, text }) => (
    <NavItem>
        <NavLink href={href}>{text}</NavLink>
    </NavItem>
);

const AlphabetLinks = ({ language, alphabet }) => (
    <Nav>
        {Object.keys(alphabet).map((value, index) => (
            <AlphabetLink
                key={`${language}-${index}`}
                {...alphabet[value]}
            />
        ))}
    </Nav>
);

const SpecialLinks = ({ links }) => (
    <Nav>
        {links.map((value, index) => (
            <AlphabetLink
                key={`special-${index}`}
                {...value}
            />
        ))}
    </Nav>
);

export default ({ alphabets, specials }) => (
    <div>
        {Object.keys(alphabets).map((language, index) =>
            <AlphabetLinks
                key={language}
                alphabet={alphabets[language]}
                language={language}
            />
        )}
        <SpecialLinks links={specials} />
    </div>
);
