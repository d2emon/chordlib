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

const AlphabetLetters = ({ language, alphabet }) => (
    <Nav>
        {Object.keys(alphabet).map((value, index) => (
            <AlphabetLink
                key={`${language}-${index}`}
                href={`/artists/${language}/${alphabet[value]}`}
                text={value}
            />
        ))}
    </Nav>
);

const AdditionalLinks = ({ links }) => (
    <Nav>
        {links.map((value, index) => (
            <AlphabetLink
                key={index}
                {...value}
            />
        ))}
    </Nav>
);

export default ({ alphabets, additionalLinks }) => (
    <div>
        {Object.keys(alphabets).map((language, index) =>
            <AlphabetLetters
                key={index}
                alphabet={alphabets[language]}
                language={language}
            />
        )}
        <AdditionalLinks links={additionalLinks} />
    </div>
);
