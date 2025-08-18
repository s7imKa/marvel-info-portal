import { Component } from 'react'

import CharInfo from '../charInfo/charInfo'
import { CharList } from '../charList/CharList'

import bgChar from '../../assets/images/background/asset.png'

import './sectionCharPanel.css'

class SectionCharPanel extends Component {
    state = {
        selectedChar: null,
    }

    onSelectedChar = (id) => {
        this.setState({
            selectedChar: id,
        })
    }

    render() {
        return (
            <section className='section-char-panel'>
                <CharList
                    onSelectedChar={this.onSelectedChar}
                    selectedChar={this.state.selectedChar}
                />
                <CharInfo charId={this.state.selectedChar} />
                <img className='bg-img' src={bgChar} alt='bgChar' />
            </section>
        )
    }
}

export default SectionCharPanel
