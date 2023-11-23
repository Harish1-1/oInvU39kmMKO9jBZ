import {Component} from 'react';

class bmipage extends Component{
    state={weight:0,height:0,bmi:0}
    calculate=event=>{
      event.preventDefault()
      const {weight,height}=this.state;
      if(typeof weight!=='string' && typeof height!=='string'){
      const bmivalue=weight/height
      this.setState({bmi:bmivalue})
      }
    }

    height=event=>{
        if(event.target.value>=0.1 && event.target.value<=3){
            this.setState({height:parseFloat(event.target.value)})
        }else{
            this.setState({height:"not in range of 0.1-3.0"})
        }
    }

    weight=event=>{
        if(event.target.value>=1 && event.target.value<=300){
            this.setState({weight:parseFloat(event.target.value)})
        }
        else{
            this.setState({weight:"not in range of 1-300"})
        }
    }

    render(){
        const {bmi,height,weight}=this.state;
    return(
        <div>
        <form onSubmit={this.calculate}>
           <h1>weight:<input type="text" onChange={this.weight}/></h1>
           <h1>height:<input type="text" onChange={this.height}/></h1>
           <button type="submit">submit</button>
        </form>
        <h1>weight:{weight}</h1>
        <h1>height:{height}</h1>
        <h1>bmi value:{bmi.toFixed(1)}</h1>
        </div>
    )
    }
}

export default bmipage