import React from "react";

const PhotoWithDetail = props => {
    // if a URL is is provided, hyperlink the title else just show the title

    return (
                    <React.Fragment>
                        <tr>
                            <td className="photo-detail-td" >
                                <p><img
                                    src={`${window.location.origin}/assets/images/${props.image_folder}/${props.image_name}`}
                                    className={props.image_class_name} alt={props.alt_text + props.title}/> {props.link ?
                                    <a href={window.location.origin + "/" + props.link}><strong>{props.title}</strong></a> :
                                    <strong>{props.title}</strong>}&mdash;{props.description}</p>

                            </td>
                        </tr>
                        <tr>
                            <td className="hr-style">
                                <hr/>
                            </td>
                        </tr>
                    </React.Fragment>

    )
}

export default PhotoWithDetail




