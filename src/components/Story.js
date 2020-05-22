import React from "react";
import $ from "jquery";

const Story = props => {

    if(props.needsTwoColumns) {
        // alert("first: " + props.needsTwoColumns);
        $(".two-column-head").show();
        $(".one-column-head").hide();
    } else {
        // alert("second: " + props.needsTwoColumns);
        $(".one-column-head").show();
        $(".two-column-head").hide();
    }


    return (
        <section>
            <h1>{props.page_heading}</h1>

        <div>
            <h2 className="one-column-head">{props.page_subheading}</h2>
            <hr className="one-column-head"/>
            {props.text}
        </div>
        </section>

    )
}

export default Story

