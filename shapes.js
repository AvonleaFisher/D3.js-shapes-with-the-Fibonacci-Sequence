var dataArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309];

var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%")

svg.selectAll("rect").data(dataArray).enter().append("rect")
.attr("height", function(d, i){ return d*15;})
.attr("width", "50")
.attr("fill", "lightseagreen")
.attr("x", function(d, i){ return 90*i; })
.attr("y", function(d, i){ return 500-(d*10)});

var newX = 300;
svg.selectAll("circle.first")
.data(dataArray)
.enter().append("circle")
.attr("class", "first")
.attr("fill", "slateblue")
.attr("cx", function(d, i) { newX+=(d*6)+(i*20); return newX; })
.attr("cy", "100")
.attr("r",function(d){ return d*3; });

var newX = 500;
svg.selectAll("circle.second")
.data(dataArray)
.enter().append("circle")
.attr("class", "second")
.attr("fill", "silver")
.attr("cx", function(d, i) { newX+=(d*5)+(i*.03); return newX; })
.attr("cy", "800")
.attr("r",function(d){ return d*2; });

var newX = 600;
svg.selectAll("ellipse")
.data(dataArray)
.enter().append("ellipse")
.attr("fill", "lightcoral")
.attr("cx", function(d, i) { newX+=(d*2)+(i*20); return newX; })
.attr("cy", "150")
.attr("rx", function(d){ return d*3; })
.attr("ry", "50");


var newX = 900;
svg.selectAll("line")
.data(dataArray)
.enter().append("line")
.attr("x1", function(d, i) { newX+=(d*6)+(i*20); return newX; })
.attr("stroke", "orange")
.attr("stroke-width", "4")
.attr("x2", "80")
.attr("y1", function(d){ return d*39; })
.attr("y2", "50");

svg.append("text").selectAll("tspan")
.data(dataArray)
.enter().append("tspan")
.attr("y", "160")
.attr("text-anchor", "start")
.attr("stroke", "skyblue")
.attr("stroke-width", "3")
.attr("font-size", 34)
.text(function(d){ return d; });


svg.append("text").selectAll("tspan")
.data(dataArray)
.enter().append("tspan")
.attr("y", "360")
.attr("text-anchor", "start")
.attr("stroke", "red")
.attr("stroke-width", "3")
.attr("font-size", 34)
.text(function(d){ return d; });


svg.append("text").selectAll("tspan")
.data(dataArray)
.enter().append("tspan")
.attr("y", "460")
.attr("text-anchor", "start")
.attr("stroke", "mediumvioletred")
.attr("stroke-width", "3")
.attr("font-size", 34)
.text(function(d){ return d; });

svg.append("text").selectAll("tspan")
.data(dataArray)
.enter().append("tspan")
.attr("y", "560")
.attr("text-anchor", "start")
.attr("stroke", "silver")
.attr("stroke-width", "3")
.attr("font-size", 34)
.text(function(d){ return d; });

svg.append("text").selectAll("tspan")
.data(dataArray)
.enter().append("tspan")
.attr("y", "660")
.attr("text-anchor", "start")
.attr("stroke", "deeppink")
.attr("stroke-width", "3")
.attr("font-size", 34)
.text(function(d){ return d; });

svg.append("text").selectAll("tspan")
.data(dataArray)
.enter().append("tspan")
.attr("y", "760")
.attr("text-anchor", "start")
.attr("stroke", "darkgoldenrod")
.attr("stroke-width", "3")
.attr("font-size", 34)
.text(function(d){ return d; });

svg.append("text").selectAll("tspan")
.data(dataArray)
.enter().append("tspan")
.attr("y", "960")
.attr("text-anchor", "start")
.attr("stroke", "forestgreen")
.attr("stroke-width", "3")
.attr("font-size", 34)
.text(function(d){ return d; });
