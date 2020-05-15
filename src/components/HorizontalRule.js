import React from "react";

function HorizontalRule(props)  {

    if (! props.isLastElement) {

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