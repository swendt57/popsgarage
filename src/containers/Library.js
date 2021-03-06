import React, {Component} from "react";

import PhotoWithDetail from "../components/PhotoWithDetail";

import $ from "jquery";

function assembleData() {
    let data = require("../assets/data/library.json");

    let libraryArray = [];
    Object.keys(data).forEach(function (key) {
        libraryArray.push(data[key]);
    });

    return libraryArray;
}

class Library extends Component {

    constructor(props) {
        super(props);

        this.state = {
            libraryData: assembleData()
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        return (

            <React.Fragment>
                <section>

                    <h1>The Library</h1>

                    <div className="container">

                        {this.state.libraryData.map((item, index) => <PhotoWithDetail key={item.title}
                                                                                      title={item.title}
                                                                                      description={item.description}
                                                                                      image_name={item.image_name}
                                                                                      image_folder="library"
                                                                                      container_class_name="photo-detail"
                                                                                      image_class_name="book-img"
                                                                                      alt_text="Book cover of: "
                                                                                      data_length={this.state.libraryData.length}
                                                                                      index={index}
                        />)}

                    </div>


                </section>
            </React.Fragment>
        )
    }
}


//Must use window-load instead of document-ready to ensure images are loaded
$(window).on("load", function () {
    // adjustSpacing(); //Not needed anymore??
});

export default Library;