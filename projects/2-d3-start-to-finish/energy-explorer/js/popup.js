let popup = Popup(); // think: don't want more than one popup, ever

function getPopupEntry(d, key, label) {
    if (!isNaN(d.popupData[key])) {
        return '<div>' + label + ': ' + d.popupData[key] + '%</div>';
    }
    return "";
}

/**
 * Individually formatted popup entry
 * @param {*} d 
 * @returns 
 */
function popupTemplate(d) {
    let html = '';
    html += '<h3>' + d.popupData.name + '</h3>';
    html += getPopupEntry(d, 'renewable', 'Renewable');
    html += getPopupEntry(d, 'oilgascoal', 'Oil, Gas & Coal');
    html += getPopupEntry(d, 'hydroelectric', 'Hydroelectric');
    html += getPopupEntry(d, 'nuclear', 'Nuclear');
    return html;
}

function handleMouseOver(e, d) {
    let popupCenter = d3.select(this) // "this" is <g>
        .select('.popup-center')
        .node(); // Get the DOM node OF this selection

    popup
        .point(popupCenter) // changed from this -> popupCenter
        .html(popupTemplate(d)) // Direct substitution of HTML
        .draw();
}

function handleMouseOut() {
    popup.hide();
}
