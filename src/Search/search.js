import React, {Component} from 'react';
import {DebounceInput} from 'react-debounce-input';


class Search extends Component{
    state = {
        value: ''
    }

    searchVideos = (event) =>{
        this.setState({
            value: event.target.value
        });
        this.props.search(this.state.value);
    }

    render(){
        const divStyle = {
            margin: '20px',
            textAlign:'center'
        }
       const searchStyle = {
            width: '75%'
        }
        const {time} = this.props;
        return (
            <div style={divStyle}>
                <DebounceInput
                    style={searchStyle}
                    debounceTimeout={time}
                    onChange={this.searchVideos} />
            </div>
        )
    }
}

export default Search;