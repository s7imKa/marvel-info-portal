import { Component } from 'react'

import CharInfo from '../charInfo/CharInfo'
import { CharList } from '../charList/CharList'
import ErrorBoundery from '../errorBoundery/errorBoundery'

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
                <ErrorBoundery>
                    <CharList
                        onSelectedChar={this.onSelectedChar}
                        selectedChar={this.state.selectedChar}
                    />
                </ErrorBoundery>

                <ErrorBoundery>
                    <CharInfo charId={this.state.selectedChar} />
                </ErrorBoundery>

                <img className='bg-img' src={bgChar} alt='bgChar' />
            </section>
        )
    }
}

export default SectionCharPanel
