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

const Letter = ({ language, value, }) => (<AlphabetLink href={`/artists/${language}/${value}`} text={value} />);

export default ({ alphabet }) => {
    return (
        <div>
            <Nav>
                {alphabet.russian.map((value, index) => <Letter key={`ru-${index}`} language="ru" value={value} />)}
            </Nav>
            <Nav>
                {alphabet.english.map((value, index) => <Letter key={`en-${index}`} language="en" value={value} />)}
            </Nav>
            <Nav>
                <AlphabetLink href="/artists/other" text="Разные песни" />
                <AlphabetLink href="/artists/num" text="#" />
                <AlphabetLink href="/artists/all" text="Все" />
                <AlphabetLink href="/add-artist" text="Добавить исполнителя" />
            </Nav>
        </div>
    );
}
