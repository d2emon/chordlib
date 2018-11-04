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

const Letter = ({ language, value, link }) => (
    <AlphabetLink
        href={`/artists/${language}/${link}`}
        text={value}
    />
);

const AlphabetLetters = ({ language, alphabet }) => (
    <Nav>
        {Object.keys(alphabet).map((value, index) => (
            <Letter
                key={`${language}-${index}`}
                language={language}
                value={value}
                link={alphabet[value]}
            />
        ))}
    </Nav>

);

export default ({ alphabet }) => {
    return (
        <div>
            <AlphabetLetters alphabet={alphabet.russian} language="ru" />
            <AlphabetLetters alphabet={alphabet.english} language="en" />
            <Nav>
                <AlphabetLink href="/artists/other" text="Разные песни" />
                <AlphabetLink href="/artists/num" text="#" />
                <AlphabetLink href="/artists/all" text="Все" />
                <AlphabetLink href="/add-artist" text="Добавить исполнителя" />
            </Nav>
        </div>
    );
}
