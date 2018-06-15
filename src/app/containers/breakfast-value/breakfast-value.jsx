import React from "react"
import style from "./breakfast-value.scss"

import StaticList from "../../presentational/static-list/static-list"

export default class test extends React.Component {

    constructor(props) {
        super()
        this.state = {
            itemtest: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    }

    componentDidMount(){
        // console.log('this.props :', this.props);
    }

    sum(a, b) {
        return a + b
    }

    render(){
        return (
            <div class="breakfast__container">
                {this.props.items.map((item, index) => <StaticList key={index} item={item} />)}
            </div>
        )
    }
}