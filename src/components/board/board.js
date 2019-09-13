import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Carson Wentz',
        img: 'img/250x180/Carson-Wentz.png',
        clicked: false
    },
    {
        name: 'Malcolm Jenkins',
        img: 'img/250x180/Malcolm-Jenkins.png',
        clicked: false
    },
    {
        name: 'Fletcher Cox',
        img: 'img/250x180/Fletcher-Cox.png',
        clicked: false
    },
    {
        name: 'Jason Kelce',
        img: 'img/250x180/Jason-Kelce.png',
        clicked: false
    },
    {
        name: 'Lane Johnson',
        img: 'img/250x180/Lane-Johnson.png',
        clicked: false
    },
    {
        name: 'Jason Peters',
        img: 'img/250x180/Jason-Peters.png',
        clicked: false
    },
    {
        name: 'Zach Ertz',
        img: 'img/250x180/Zach-Ertz.png',
        clicked: false
    },
    {
        name: 'Alshon Jeffrey',
        img: 'img/250x180/Alshon-Jeffrey.png',
        clicked: false
    },
    {
        name: 'Desean Jackson',
        img: 'img/250x180/Desean-Jackson.png',
        clicked: false
    },
    {
        name: 'Brandon-Graham',
        img: 'img/250x180/Brandon-Graham.png',
        clicked: false
    },
    {
        name: 'Ronald Darby',
        img: 'img/250x180/Ronald-Darby.png',
        clicked: false
    },
    {
        name: 'Nelson Agholor',
        img: 'img/250x180/Nelson-Agholor.png',
        clicked: false
    },
    {
        name: 'Rodney Mcleod',
        img: 'img/250x180/Rodney-Mcleod.png',
        clicked: false
    },
    {
        name: 'Nigel Bradham',
        img: 'img/250x180/Nigel-Bradham.png',
        clicked: false
    },
    {
        name: 'Darren Sproles',
        img: 'img/250x180/Darren-Sproles.png',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>When you click on a player the player images will shuffle.<br/>If you click the same player twice the game will start over.</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}