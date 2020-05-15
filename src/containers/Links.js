import React, {Component} from "react";
import ReactHtmlParser from 'react-html-parser';

import PhotoWithDetailAndUrls from "../components/PhotoWithDetailAndUrls";


function assembleData() {
    let data = require("../assets/data/links.json");

    let linksArray = [];
    Object.keys(data).forEach(function (key) {
        linksArray.push(data[key]);
    });

    return linksArray;
}

let dataLength = 0;
let masterIndex = -1;

function updatePlaceholders(stringToUpdate, urls) {
    for (let i = 0; i < urls.length; i++) {
        let variables = urls[i];
        stringToUpdate = stringToUpdate.replace("[" + i + "]", `<a href="${variables.url}" target="_blank" rel="noopener noreferrer">${variables.name}</a>`);
    }
    return stringToUpdate;
}


function getDetailCode(item) {
    masterIndex++;
    return (
        <PhotoWithDetailAndUrls key={item.title}
                                title={item.title}
                                description={ReactHtmlParser(updatePlaceholders(item.description, item.urls))}
                                image_name={item.image_name}
                                image_folder="links"
                                container_class_name="photo-detail"
                                image_class_name="car-img"
                                alt_text={item.image_name}
                                urls={item.urls}
                                category={item.category}
                                subcategory={item.subcategory}
                                link={item.link}
                                data_length={dataLength}
                                index={masterIndex}
        />
    )
}

class Links extends Component {

    constructor(props) {
        super(props);

        this.state = {
            linksData: assembleData()
        }

        dataLength = this.state.linksData.length;
        masterIndex = -1; //need to rest this each time
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section>
                <h1>Links</h1>

                <div className="container">
                    <h2>The Independents</h2>
                    <hr/>

                    <h4>American Motors Corporation</h4>

                    {this.state.linksData.map(item => {
                        return (item.category === "independents" && item.subcategory === "amc") ?
                            getDetailCode(item) : ""
                    })}

                    <h4>Hudson</h4>
                    {this.state.linksData.map(item => {
                        return (item.category === "independents" && item.subcategory === "hudson") ?
                            getDetailCode(item) : ""
                    })}

                    <h4>Nash</h4>
                    {this.state.linksData.map(item => {
                        return (item.category === "independents" && item.subcategory === "nash") ?
                            getDetailCode(item) : ""
                    })}

                    <h4>Packard</h4>
                    {this.state.linksData.map(item => {
                        return (item.category === "independents" && item.subcategory === "packard") ?
                            getDetailCode(item) : ""
                    })}

                    <h4>Studebaker</h4>
                    {this.state.linksData.map(item => {
                        return (item.category === "independents" && item.subcategory === "studebaker") ?
                            getDetailCode(item) : ""
                    })}

                    <h2>Livery</h2>
                    <hr/>

                    <h4>Hearses</h4>
                    {this.state.linksData.map(item => {
                        return (item.category === "livery" && item.subcategory === "hearses") ?
                            getDetailCode(item) : ""
                    })}

                    <h4>Limousines</h4>
                    {this.state.linksData.map(item => {
                        return (item.category === "livery" && item.subcategory === "limousines") ?
                            getDetailCode(item) : ""
                    })}

                    <h2>Other Web Sites</h2>
                    <hr/>

                    {this.state.linksData.map(item => {
                        return item.category === "other_web_sites" ?
                            getDetailCode(item) : ""
                    })}
                </div>
            </section>
        )
    }
}

export default Links;
