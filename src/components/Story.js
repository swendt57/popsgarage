import React from "react";

const Story = props => {



    return (
        <section>
            <h1>{props.page_heading}</h1>

        <div>
            <h2 className="two-column-hide">{props.page_subheading}</h2>
            <hr className="two-column-hide"/>
            {props.text}
        </div>
        </section>

    )
}

export default Story

