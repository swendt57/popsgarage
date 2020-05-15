import React from "react";


const PhotoWithDetailAndUrls = props => {

    let isLastElement = props.data_length === (props.index + 1)

    function HorizontalRule() {
        if( ! isLastElement) {
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

    return (
                    <React.Fragment>
                        <tr>
                            <td className="photo-detail-td" >
                                <p className={props.container_class_name}><img
                                    src={`${window.location.origin}/assets/images/${props.image_folder}/${props.image_name}`}
                                    className={props.image_class_name} alt={props.alt_text + props.title}/> {props.link ?
                                    <a href={window.location.origin + "/" + props.link}><strong>{props.title}</strong></a> :
                                    <strong>{props.title}</strong>}&mdash;{props.description}</p>

                            </td>
                        </tr>
                        <HorizontalRule/>
                    </React.Fragment>

    )
}

export default PhotoWithDetailAndUrls




