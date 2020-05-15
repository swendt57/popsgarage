import React from "react";

const PhotoAndCaption = props => {

    let isLastElement = props.data_length === (props.index + 1)

    function HorizontalRule() {
        if( ! isLastElement) {
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

    return ( <table className="table">
            <tbody>
            <tr>
                <td className="photo-caption-td text-center"><img src={`${window.location.origin}/assets/images/${props.image_folder}/${props.image_name}`}
                                          className={props.class_name}
                                          alt={props.alt_text + props.title} />
                </td>
            </tr>
            <tr>
                <td className="photo-caption-td">
                    <h2 className="text-center">{props.title}</h2>
                    <p>{props.description}</p>
                </td>
            </tr>
            <HorizontalRule/>

            </tbody>
        </table>
    )
}

export default PhotoAndCaption

