import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErorrBoundary from "../errorBoundary/ErorrBoundary";

import decoration from '../../resources/img/vision.png';

class App extends Component {
    state = {
        SelectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            SelectedChar: id
        })
    }
render () {
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <RandomChar/>
                <div className="char__content">
                    <CharList onCharSelected={this.onCharSelected}/>
                    <ErorrBoundary>
                    <CharInfo charId={this.state.SelectedChar}/>
                    </ErorrBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}

}
export default App;