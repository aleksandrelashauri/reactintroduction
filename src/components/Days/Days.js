import React, {Component} from "react"

class Days extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=be20f40819aa6518ef1d8eeffc368109")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading: false,
                character: data
            })
        })
    }
    render() {
        const text = this.state.loading ? "loading..." : this.state.character.base
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default Days

