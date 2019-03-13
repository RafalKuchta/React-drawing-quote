
const Show = (props) => {
    if(props.index.math === ""){
        return <h3>{""}</h3>
    } else
    return <h1>"{props.quo[props.index.math].quotation}"</h1>
    
}

class App extends React.Component {
    state = {
        math: "",
        value: "",
    };

    informations = [
        {
            quotation: "Jesteś odpowiedzialny nie tylko za to, co mówisz, ale również za to, czego nie mówisz."
        },

        {
            quotation: "Poddający się - nigdy nie wygrywa, a wygrywający - nigdy się nie poddaje"
        },

        {
            quotation: "Czy jest ktoś, kogo chciałbyś zmienić, poinstruować, ulepszyć? Świetnie! Jestem za! Ale dlaczego nie zaczniesz od siebie?"
        },

    ]

    handleShowQuotation = () => {
        let indexMath = Math.floor(Math.random() * this.informations.length)
        this.setState({
            math: indexMath
        })
    }

    handleAddQuotation = (e) => {
        e.preventDefault()
        // console.log(this.state.value)
        if(this.state.value === "") return alert("Wpisz cytat!") 
        this.setState({
            informations: this.informations.push({quotation: this.state.value}),
            value: ""
        })
        
        return alert(`Cytat odany. Cytaty w bazie: ${this.informations.map(item => item.quotation)}`)
    }

    addValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }


    render() {
        // console.log(this.informations)
        return (
            <div>
                <button onClick={this.handleShowQuotation}>Cytat dnia</button>
                <br />

                <form>
                    <input value={this.state.value} type="text" onChange={this.addValue}/>
                    <button onClick={this.handleAddQuotation}>Dodaj cytat</button>
                </form>
               <div className="quo">{<Show quo={this.informations} index={this.state} />}</div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))