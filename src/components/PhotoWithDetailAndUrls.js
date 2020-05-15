import React from "react";

import HorizontalRule from "./HorizontalRule";

const PhotoWithDetailAndUrls = props => {

    let isLastElement = props.data_length === (props.index + 1)

    return (
        <React.Fragment>
            <table className="table">
                <tbody>
                <tr>
                    <td className="photo-detail-td">
                        <p className={props.container_class_name}><img
                            src={`${window.location.origin}/assets/images/${props.image_folder}/${props.image_name}`}
                            className={props.image_class_name} alt={props.alt_text + props.title}/> {props.link ?
                            <a href={window.location.origin + "/" + props.link}><strong>{props.title}</strong></a> :
                            <strong>{props.title}</strong>}&mdash;{props.description}</p>

                    </td>
                </tr>
                <HorizontalRule isLastElement={isLastElement}/>
                </tbody>
            </table>
        </React.Fragment>

    )
}

export default PhotoWithDetailAndUrls




