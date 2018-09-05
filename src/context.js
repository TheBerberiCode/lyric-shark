import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        track_list: [],
        heading: "top 10 tracks"
    }

    componentDidMount(){
        
        fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
          .then(res => {
            return res.json();
          })
          .then(myJson => {
            this.setState({track_list : myJson.message.body.track_list});
          })
          .catch(function (err){
            console.log("error fetching json from musixmatch api on "+ new Date());    
        });
        
    }
    
    render() {
       return (
       
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
           
       );
        
    } 
    
}

export const Consumer = Context.Consumer;