let menuItems = [
  {
    id: "country",
    label: "Country",
  },
  {
    id: "renewable",
    label: "Renewable",
  },
  {
    id: "oilgascoal",
    label: "Oil, Gas & Coal",
  },
  {
    id: "hydroelectric",
    label: "Hydroelectric",
  },
  {
    id: "nuclear",
    label: "Nuclear",
  }
]

function getCircle(id) {
  let svg = '<svg width="18" height="18"><circle class="'
    + id + '" cx="9" cy="9" r="8"></svg>';
  return svg; // Styles a small circle element
}


function getHtml(d) {
  let circle = d.id === 'country' ? '' : getCircle(d.id); // uses getCircle() 
  let label = '<div class="label">' + d.label + '</div>';
  return circle + label; // Returns a circle and a label for it
}

function handleMenuClick(e, d) { // Another error: when you didn't include e, d it just gave you the event, not the data
  action('setSelectedIndicator', d.id);
  console.log("handleMenuClick hey");
}

function updateMenu() {
  d3.select("#controls .menu .items")
    .selectAll(".item")
    .data(menuItems)
    .join("div")
    .classed("item", true)
    .classed("selected", function (d) {
      return d.id === state.selectedIndicator;
    })
    .html(getHtml)
    .on("click", handleMenuClick);
}