import React from 'react';

import Iframe from 'react-iframe'

import $ from 'jquery';

function hideBannerAndFooter() {
    $('#footer-container').hide();
    $('#banner').hide();
    $('#header-bg').hide();
    $(document.body).css('margin-top',0);
}

function resize() {
    let iFrame = $('#galleryIframe');
    iFrame.attr('height', '100%');
    iFrame.attr('width', '100%');
}

const Gallery = (props) => {

    $(document).ready(function() {
        hideBannerAndFooter();
        resize();
    })

    return (
        <React.Fragment>
        <div>

            <Iframe src={`${window.location.origin}/assets/galleries/${props.gallery_name}/index.html`}
                    width='100%'
                    height='100%'
                    id="galleryIframe"
                    display="initial"
                    position="absolute"
            />

        </div>
        </React.Fragment>

    )
}


export default Gallery

