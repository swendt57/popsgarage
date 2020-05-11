import React, {Component} from "react";

import PhotoWithDetail from "../components/PhotoWithDetail";

import $ from "jquery";

function assembleData() {
    let data = require("../assets/data/tire_kicking.json");

    let itemArray = [];
    Object.keys(data).forEach(function(key) {
        itemArray.push(data[key]);
    });

    return itemArray;
}


class TireKicking extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tireKickingData: assembleData()
        }
    }

    componentDidMount() {
    }

    render () {
        return (
            <section>

                <h1>Tire Kicking</h1>

                <div className="container">

                    <table className="table">
                        <tbody>

                    {this.state.tireKickingData.map(item =>
                        <PhotoWithDetail key={item.title}
                                         title={item.title}
                                         description={item.description}
                                         image_name={item.image_name}
                                         image_folder="tire_kicking"
                                         container_class_name="photo-detail"
                                         image_class_name="car-img"
                                         alt_text={item.title + 'example'}
                                         link={item.link} />)}
                        </tbody>
                    </table>
                </div>


            </section>
        )
    }
}


export default TireKicking;
