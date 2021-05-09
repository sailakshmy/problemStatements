import React,{Component} from 'react';


class Trial extends Component{
    constructor(props){
        super(props);
        this.state={
            details:[]
        }
    }
    componentDidMount(){
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json)
        .then(data=> {
            this.setState({
                details:data.results
            });
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                <p>Card details</p>
                <DetailsTrial detailTrial={this.state.details} />
            </div>
        )
    }
}

export default Trial;

function DetailsTrial ({detailsTrial}){
    return(
        <div>
            {detailsTrial.map(detail=>{
                return(
                    <div className="row">
                        
                    </div>
                )

            })}
        </div>
    )

}