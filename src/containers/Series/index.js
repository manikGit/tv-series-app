import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader'
import Intro from '../../components/intro'

class Series extends Component {
    state = {
        series : [],
        seriesName : '',
        isFetching : false
      }
    //   componentDidMount(){
    //     fetch('http://api.tvmaze.com/search/shows?q=vikings')
    //     .then(response =>  response.json())
    //     .then(json => this.setState({series:json}))
    //   }
      onSeriesChangeInput = (e) => {
        this.setState({seriesName:e.target.value, isFetching : true});
        fetch('http://api.tvmaze.com/search/shows?q='+e.target.value)
        .then(response =>  response.json())
        .then(json => this.setState({series:json, isFetching : false}))
      }  
    render() {
        const {series, seriesName, isFetching} = this.state;
        return (
            <div>
                <Intro message="Here you can API"/>
            <div>
                <input 
                    value={seriesName}
                    type="text" 
                    onChange={this.onSeriesChangeInput}/>
            </div>
            {!isFetching && series.length === 0 && seriesName.trim() === '' && <p> Please type series Name</p>}
            {!isFetching && series.length === 0 && seriesName.trim() !== '' && <p> No Result found</p>}
            { isFetching && <Loader />}
            { !isFetching && <SeriesList list = {this.state.series} />}
            
            </div>
        )
    }
}

export default Series;
