import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner';

class Lyrics extends Component {
	state ={
		track: {},
		lyrics: {}

	};

	componentDidMount(){

		fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
          .then(res => {
            return res.json();
          })
          .then(res => {
            console.log(res);
            this.setState({lyrics : res.message.body.lyrics});


          	//second fetch call that fetches track info after fetching the lyrics 
            return fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            		.then( trackInfo => {
            			return trackInfo.json();
            		})
            		.then(trackInfo => {
            			console.log(trackInfo);
            			this.setState({track : trackInfo.message.body.track});
            		})
            		.catch(err => console.log(`$error fetching track info on ${new Date()} ${err}`))

          })
          .catch(function (err){
            console.log("error fetching json from musixmatch api on "+ new Date() + err);    
        });
	}


	render () {
		const {track, lyrics} = this.state;
		if(track === undefined || lyrics === undefined || Object.keys(track).length == 0 || Object.keys(lyrics).length == 0)
			return <Spinner />;
		else {

			return (
				<React.Fragment>
					<Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
					<div className="card">
						<div className="card-header">
							{track.track_name} by  <span className="text-secondary">{track.artist_name}</span>
						</div>
					</div>
				</React.Fragment>

				);
		}

}
}


export default Lyrics;