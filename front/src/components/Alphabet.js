import React, { Component } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function list_alphabet(first, last) {
    let letters = [];
    for (let l = first.charCodeAt(0); l <= last.charCodeAt(0); l++) {
        letters.push(String.fromCharCode(l));
    }
    return letters;
}

class Alphabet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            russian: list_alphabet('А', 'Я'),
            english: list_alphabet('A', 'Z'),
        };
    }

    render () {
        return (
            <div>
                <Nav>
                    { this.state.russian.map((value, index) => <NavItem key={index}>
                        <NavLink href={"/artists/ru/" + value}>{value}</NavLink>
                    </NavItem>)}
                </Nav>
                <Nav>
                    { this.state.english.map((value, index) => <NavItem key={index}>
                        <NavLink href={"/artists/en/" + value}>{value}</NavLink>
                    </NavItem>)}
                </Nav>
                <Nav>
                    <NavItem><NavLink href="/artists/other">Разные песни</NavLink></NavItem>
                    <NavItem><NavLink href="/artists/num">#</NavLink></NavItem>
                    <NavItem><NavLink href="/artists/all">Все</NavLink></NavItem>
                    <NavItem><NavLink href="/add-artist">Добавить исполнителя</NavLink></NavItem>
                </Nav>
            </div>
        );
    }
}

export default Alphabet;
