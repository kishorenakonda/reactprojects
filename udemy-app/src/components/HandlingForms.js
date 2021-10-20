import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './ImageList';

// Functional Component
// const HandlingForms = () => {
//     return (
//         <div className="ui container" style={{ marginTop: '30px' }}> <SearchInput /> </div>
//     )
// }

class HandlingForms extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            images: []
        }

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    async onSearchSubmit(entry) {
        const response = await axios.get(`https://pixabay.com/api/?key=23940332-6294f9b0b0cc1db07164c754b&q=${entry}&image_type=photo&pretty=true`);
        this.setState({ images: response.data.hits });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '30px' }}>
                {/* Communicating from child component to parent component */}
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}></ImageList>
            </div>
        )
    }
}

export default HandlingForms;
