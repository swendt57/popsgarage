import React from "react";


class SitemapDisplay extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <React.Fragment>
                <section>
                    <h1>Site Map</h1>
                    <div className="container">

                        <strong style={{color: "black"}}>Pop's Garage</strong>
                        <ul>
                        <li><strong><a href="https://popsgarage.herokuapp.com">Home</a></strong></li>
                        <li><strong><a href="https://popsgarage.herokuapp.com/showroom">Showroom</a></strong></li>
                            <li><strong><a href="https://popsgarage.herokuapp.com/tire_kicking">Tire Kicking</a></strong></li>
                            <ul className="inner-list">
                                <li><a href="https://popsgarage.herokuapp.com/tire_kicking/nash_rambler">Restoring a 1953 Nash Rambler</a></li>
                                <ul>
                                    <li><a href="https://popsgarage.herokuapp.com/tire_kicking/nash_rambler/gallery">Photo Gallery</a></li>
                                </ul>
                                <li className="inner-list"><a href="https://popsgarage.herokuapp.com/tire_kicking/metropolitan_story">The Metropolitan</a></li>
                                <ul>
                                    <li><a href="https://popsgarage.herokuapp.com/tire_kicking/metropolitan_story/gallery">Photo Gallery</a></li>
                                </ul>
                                <li><a href="https://popsgarage.herokuapp.com/tire_kicking/land_cruiser">1948 Studebaker Land Cruiser</a></li>
                                <ul>
                                    <li><a href="https://popsgarage.herokuapp.com/tire_kicking/land_cruiser/gallery">Photo Gallery</a></li>
                                </ul>
                                <li><a href="https://popsgarage.herokuapp.com/tire_kicking/beep_beep">Beep Beep</a></li>
                                <li><a href="https://popsgarage.herokuapp.com/tire_kicking/calendar_art">Great Calendar Art</a></li>
                                <li><a href="https://popsgarage.herokuapp.com/tire_kicking/nash_remodel">One Man's Classic Rambler, Another's Custom Classic!</a></li>
                            </ul>
                            <li><strong><a href="https://popsgarage.herokuapp.com/livery">The Livery</a></strong></li>
                            <ul className="inner-list">
                                <li><a href="https://popsgarage.herokuapp.com/livery/professional_cars">The Professional Cars</a></li>
                                <ul>
                                    <li><a href="https://popsgarage.herokuapp.com/livery/professional_cars/bw_gallery">B&amp;W Photo Gallery</a></li>
                                    <li><a href="https://popsgarage.herokuapp.com/livery/professional_cars/color_gallery-1">Color Photo Gallery 1</a></li>
                                    <li><a href="https://popsgarage.herokuapp.com/livery/professional_cars/color_gallery-2">Color Photo Gallery 2</a></li>
                                </ul>
                                <li><a href="https://popsgarage.herokuapp.com/livery/chrysler_crown_imperial">1949 Chrysler Crown Imperial Limousine</a></li>
                                <ul>
                                    <li><a href="https://popsgarage.herokuapp.com/livery/chrysler_crown_imperial/gallery">Photo Gallery</a></li>
                                </ul>
                            </ul>
                            <li><strong><a href="https://popsgarage.herokuapp.com/links">Links</a></strong></li>
                            <li><strong><a href="https://popsgarage.herokuapp.com/library">The Library</a></strong></li>
                        </ul>

                    </div>
                </section>
            </React.Fragment>



    // https://popsgarage.herokuapp.com/tire_kicking/nash_remodel
    //
    // https://popsgarage.herokuapp.com/assets/galleries/chrysler_crown_imperial_gallery/index.html
    //
    // https://popsgarage.herokuapp.com/assets/galleries/land_cruiser_gallery/index.html
    //
    // https://popsgarage.herokuapp.com/assets/galleries/metro_gallery/index.html
    //
    // https://popsgarage.herokuapp.com/assets/galleries/nash_rambler_gallery/index.html
    //
    // https://popsgarage.herokuapp.com/assets/galleries/professional_bw_gallery/index.html
    //
    // https://popsgarage.herokuapp.com/assets/galleries/professional_color_gallery-1/index.html
    //
    // https://popsgarage.herokuapp.com/assets/galleries/professional_color_gallery-2/index.html
        )
    }

}

export default SitemapDisplay;
