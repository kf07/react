import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            hp:'1200',
            pp:'160'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {

        switch (e.target.name) {
            case 'hp':
                this.setState({
                    hp: e.target.value,
                });

                break;
            case 'pp':
                this.setState({
                    pp: e.target.value,
                });
                break;
            default:
        }
    }

    handleClick(){
        const hp = this.state.hp;
        const pp = this.state.pp;
        console.log(hp,pp)
    }

    render(){
        return(
           <div className="form">
               <input value={this.state.hp} onChange={this.handleChange} name="hp" />
               <input value={this.state.pp} onChange={this.handleChange} name="pp" />
               <button onClick={this.handleClick}>登録</button>
               <p>HP:{this.state.hp}</p>
               <p>PP:{this.state.pp}</p>
           </div>
        )
    }
}

export default App;