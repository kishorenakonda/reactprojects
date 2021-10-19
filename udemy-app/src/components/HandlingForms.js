import React from 'react';
import SearchInput from './SearchInput';

// Functional Component
// const HandlingForms = () => {
//     return (
//         <div className="ui container" style={{ marginTop: '30px' }}> <SearchInput /> </div>
//     )
// }

class HandlingForms extends React.Component {

    constructor(props) {
        super(props)

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchSubmit(entry) {
        console.log(entry);
    }

    render() {
        // Communicating from child component to parent component
        return (
            <div className="ui container" style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default HandlingForms;
