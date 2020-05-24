import {Switch, Route} from "react-router-dom";
import React from "react";

import Home from '../containers/Home';
import Showroom from '../containers/Showroom';
import TireKicking from '../containers/TireKicking';
import Livery from '../containers/Livery';
import Links from '../containers/Links';
import Library from '../containers/Library';
import MetropolitanStory from '../containers/MetropolitanStory';
import NashRambler from '../containers/NashRambler';
import LandCruiser from '../containers/LandCruiser';
import BeepBeep from '../containers/BeepBeep';
import CalendarArt from "../containers/CalendarArt"
import NashRemodel from "../containers/NashRemodel";
import ProfessionalCars from "../containers/ProfessionalCars";
import ChryslerCrownImperial from "../containers/ChryslerCrownImperial";
import SitemapDisplay from "../containers/SitemapDisplay";
import ContactUs from "../containers/ContactUs";
import ThankYou from "../containers/ThankYou";
import EmailError from "../containers/EmailError";

const Routes = () => {

    return (
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/showroom" component={Showroom} />
            <Route path="/tire_kicking" component={TireKicking} exact={true} />
            <Route path="/livery" component={Livery} exact={true} />
            <Route path="/library" component={Library} />
            <Route path="/links" component={Links} />
            <Route path="/tire_kicking/metropolitan_story" component={MetropolitanStory} />
            <Route path="/tire_kicking/nash_rambler" component={NashRambler} />
            <Route path="/tire_kicking/land_cruiser" component={LandCruiser} exact={true} />
            <Route path="/tire_kicking/beep_beep" component={BeepBeep} />
            <Route path="/tire_kicking/calendar_art" component={CalendarArt} />
            <Route path="/tire_kicking/nash_remodel" component={NashRemodel} />
            <Route path="/livery/professional_cars" component={ProfessionalCars} />
            <Route path="/livery/chrysler_crown_imperial" component={ChryslerCrownImperial} />
            <Route path="/sitemap" component={SitemapDisplay} />
            <Route path="/contact_us" component={ContactUs} exact={true} />
            <Route path="/contact_us/thank_you" component={ThankYou} />
            <Route path="/contact_us/email_error" component={EmailError} />
        </Switch>

    );
};

export default Routes;