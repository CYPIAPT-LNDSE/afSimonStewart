

//d3.json("../dummyData/emotionResults.json", function (error, results) {
//
//  if (error) return console.warn(error);
//
//});

function emotionResultGraph(total, result, element) {

  const margin = {top: 20, right: 20, bottom: 20, left: 20};
  const height = 200 - margin.top - margin.bottom;
  const width = $(element).width() - margin.left - margin.right;  

  const lineData = [{y: 50, x: 0}, {y: 50, x: total / 2}, {y: 50, x: total}]

  const xScale = d3.scaleLinear()
    .domain([0, total])
    .range([0, width]);
  const yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

  const axis = d3.axisBottom()
    .scale(xScale)
    .ticks(2)
    .tickValues([0, 100])

  const line = d3.line()
    .x(function (d) {
      return xScale(d.x);
    })
    .y(function (d) {
      return yScale(d.y);
    });

  const svg = d3.select(element)
    .append("svg")
    .attr("width", '100%')
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("path")
    .datum(lineData)
    .attr("d", line)

  svg.selectAll("dot")
    .data(result)
    .enter()
    .append("circle")
    .attr("class", function(d) {
      return d.id === "user" ? "lifetime-graph__dots-user" : "lifetime-graph__dots-api";
    })
    .attr("r", 8)
    .attr("cx", function(d) { return xScale(d.score); })
    .attr("cy", function(d) { return yScale(50); });
}


