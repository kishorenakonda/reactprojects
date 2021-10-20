import React from 'react';

class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = { entry: '' }

        // when we use bind() it produces the new updated value
        // Method 1 : if we want to use state we use bind()
        // this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
    }

    // if we are doing normal function call , then we need to use bind() in constructor
    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.entry);
    }

    onFormSubmitArrowFunction = (event) => {
        event.preventDefault();
        // console.log(this.state.entry);
        this.props.onSearchSubmit(this.state.entry);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmitArrowFunction}>
                    <div className="field">
                        <div className="ui massive icon input">
                            {/* Normal method call for onchange */}
                            {/* <input type="text" placeholder="Search..." onChange={this.onInputChange} /> */}

                            {/* <input type="text" placeholder="Search..." 
                                onChange={(event) => console.log(event.target.value)} /> */}

                            <input type="text" placeholder="Search..."
                                onChange={(event) => this.setState({ entry: event.target.value })}
                                value={this.state.entry} />

                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

// if we write like this.onInputChange() -> It will automatically invoke the method when the component is rendered
// Instead if we simply write this.onInputChange -> this will wait for user input and then gets invoked

// --- UnControlled Elements : Harcoded values ---
// React : no variable declared
// HTML : <input value="harcodedvalue"

// --- Controlled Elements : Dynamic Binding of values ---
// React: A State object is declared, state = { entry: '' }
// HTML: <input value={this.state.entry}

export default SearchInput;