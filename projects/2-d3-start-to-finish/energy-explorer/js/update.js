function initialiseGroup(g, d) {
    g.classed("country", true)
        .style("opacity", 0)
        .attr("transform", `translate(${d.x}, ${d.y})`)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);

    // Feels like an odd way to deal with popup centering,
    // but alright
    g.append("circle")
        .classed("popup-center", true)
        .attr("r", 1);

    g.append("circle")
        .classed("renewable", true);
    g.append("circle")
        .classed("oilgascoal", true);
    g.append("circle")
        .classed("hydroelectric", true);
    g.append("circle")
        .classed("nuclear", true);
    g.append("text")
        .classed("label", true);
}

function updateGroup(d, i) {
    var g = d3.select(this);

    if (g.selectAll("*").empty()) initialiseGroup(g, d);

    g.transition()
        .attr("transform", `translate(${d.x}, ${d.y})`)
        .style("opacity", d.visible ? 1 : 0) // hide those with zero
        .style("pointer-events", d.visible ? "all" : "none");

    g.select(".popup-center")
        .attr("cy", d.popupOffset);

    g.select(".renewable")
        .transition()
        .duration(config.transitionDuration)
        .delay(i * config.transitionDelay)
        .attr("r", d.renewableRadius);

    g.select(".oilgascoal")
        .transition()
        .duration(config.transitionDuration)
        .delay(i * config.transitionDelay)
        .attr("r", d.oilGasCoalRadius);

    g.select(".hydroelectric")
        .transition()
        .duration(config.transitionDuration)
        .delay(i * config.transitionDelay)
        .attr("r", d.hydroelectricRadius);

    g.select(".nuclear")
        .transition()
        .duration(config.transitionDuration)
        .delay(i * config.transitionDelay)
        .attr("r", d.nuclearRadius);

    g.select("text")
        .transition()
        .duration(config.transitionDuration)
        .delay(i * config.transitionDelay)
        .attr("y", d.labelOffset)
        .text(d.labelText);
}

function updateLegend() {
    d3.select(".legend circle")
        .attr("r", getMaxRadius());
}

function updateChart() {
    let layoutData = layout(data);
    d3.select('#chart') // Previous had error because said svg instead of #chart
        .selectAll('g')
        .data(layoutData, d => d.id)
        .join('g')
        .each(updateGroup);
}

function update() {
    updateChart();
    updateMenu();
    updateLegend();
}
