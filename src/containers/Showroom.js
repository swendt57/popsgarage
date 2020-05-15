import React, {Component} from "react";
import Alert from 'react-bootstrap/Alert';

import PhotoWithDetail from "../components/PhotoWithDetail";

function assembleData() {
    let data = require("../assets/data/showroom.json");

    let showroomArray = [];
    Object.keys(data).forEach(function (key) {
        showroomArray.push(data[key]);
    });

    return showroomArray;
}

let dataLength = 0;
let masterIndex = -1;

function getDetailCode(item) {
    masterIndex++;
    return (
        <PhotoWithDetail key={item.title}
                         title={item.title}
                         description={item.description}
                         image_name={item.image_name}
                         image_folder="showroom"
                         container_class_name="photo-detail"
                         image_class_name="car-img"
                         alt_text="A sample model from: "
                         data_length={dataLength}
                         index={masterIndex}
        />
    )
}


class Showroom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showroomData: assembleData(),
        }

        dataLength = this.state.showroomData.length;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section>

                <Alert key={"anything"} variant="danger">
                    <p><strong>Coming Soon:</strong> New model information and links for the Showroom detail pages!</p>
                </Alert>

                <h1>Showroom</h1>

                <div className="container">

                    <h2>The Independents</h2>
                    <hr/>

                    {this.state.showroomData.map(item => {
                        return item.category === "independents" ?
                            getDetailCode(item)
                            :
                            ""
                    })}

                    <h2>Hearses</h2>
                    <hr/>

                    {this.state.showroomData.map(item => {
                        return item.category === "hearses" ?
                            getDetailCode(item)
                            :
                            ""
                    })}

                    <h2>Limousines</h2>
                    <hr/>

                    {this.state.showroomData.map((item, index) => {
                        return item.category === "limousines" ?
                            getDetailCode(item, item.index)
                            :
                            ""
                    })}

                </div>

            </section>
        )
    }
};

export default Showroom;
