import React from 'react';

export default class PersonCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            increaseAge: this.props.age,
        };
    }

    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.increaseAge}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={() => this.setState({ increaseAge: this.state.increaseAge + 1 })}>
                    Birthday!!</button>
            </div>
        )
    }

}

