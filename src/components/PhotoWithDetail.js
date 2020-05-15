import React from "react";

import HorizontalRule from '../components/HorizontalRule';

const PhotoWithDetail = props => {
    // if a URL is is provided, hyperlink the title else just show the title

    let isLastElement = props.data_length === (props.index + 1)

    return (
        <React.Fragment>
            <table className="table">
                <tbody>
                <tr>
                    <td className="photo-detail-td">
                        <p><img
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

export default PhotoWithDetail




