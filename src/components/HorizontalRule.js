import React from "react";

function HorizontalRule(props)  {

    if (! props.isLastElement) {
        // console.log("data: " + props.data_length + " index: " + props.index);
        return (
            <tr>
                <td className="hr-style">
                    <hr/>
                </td>
            </tr>
        )
    }
    return null;
}

export default HorizontalRule;