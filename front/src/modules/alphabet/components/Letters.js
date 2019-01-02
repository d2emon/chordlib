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

export default ({ alphabet }) => {
    const alphabets = [
        { language: 'ru', alphabet: alphabet.russian },
        { language: 'en', alphabet: alphabet.english },
    ];
    const additionalLinks = [
        { text: 'Разные песни', href: '/artists/other' },
        { text: '#', href: '/artists/num' },
        { text: 'Все', href: '/artists/all' },
        { text: 'Добавить исполнителя', href: '/add-artist' },
    ];

    return (
        <div>
            {alphabets.map(letters => (
                <AlphabetLetters
                    alphabet={letters.alphabet}
                    language={letters.language}
                />
            ))}
            <AdditionalLinks links={additionalLinks} />
        </div>
    );
}
