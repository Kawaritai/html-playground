function sortAccessor(d) {
    let value = d[state.selectedIndicator];
    if (isNaN(value)) value = 0;
    return value;
}

function getSortedData(data) {
    let sorted;

    if (state.selectedIndicator === 'country') {
        sorted = _.orderBy(data, "name");
    } else {
        sorted = _.orderBy(data, sortAccessor, 'desc');
    }
    return sorted;
}

function isVisible(d) {
    return state.selectedIndicator === 'country' || d[state.selectedIndicator] > 0;
}

function getTruncatedLabel(text) {
    return text.length <= 10 ? text : text.slice(0, 10) + '...';
}

function getMaxRadius() {
    let cellWidth = config.width / config.numColumns;
    let maxradius = 0.35 * cellWidth;
    return maxradius;
}

/**
 * Layout data appears to contain quite a lot of information before
 * it is passed to other functions (data formatting, labels, offsets, popup data, etc.)
 * 
 * Like some sort of one-stop-shop.
 * @param {*} data 
 * @returns 
 */
function layout(data) {
    let labelHeight = 20;
    let cellWidth = config.width / config.numColumns;
    let cellHeight = cellWidth + labelHeight; // is square + label

    let maxRadius = getMaxRadius(); // proportion within cell

    let radiusScale = d3.scaleSqrt()
        .domain([0, 100])
        .range([0, maxRadius]); // use maxRadius

    let sortedData = getSortedData(data);

    let layoutData = sortedData.map(function(d, i){
        let column = i % config.numColumns;
        let row = Math.floor(i / config.numColumns);
        return {
            id: d.id, // used for data-join and transitions
            x: column * cellWidth + 0.5 * cellWidth,
            y: row * cellHeight + 0.5 * cellHeight,
            
            
            visible: isVisible(d),

            renewableRadius: radiusScale(d.renewable),
            oilGasCoalRadius: radiusScale(d.oilgascoal),
            hydroelectricRadius: radiusScale(d.hydroelectric),
            nuclearRadius: radiusScale(d.nuclear),

            labelText: getTruncatedLabel(d.name),
            labelOffset: maxRadius + labelHeight,

            popupOffset:-0.8 * maxRadius, // move it up a bit
            popupData: {
                name: d.name,
                hydroelectric: d.hydroelectric,
                nuclear: d.nuclear,
                oilgascoal: d.oilgascoal,
                renewable: d.renewable
            }
        }
    })
    return layoutData;
}