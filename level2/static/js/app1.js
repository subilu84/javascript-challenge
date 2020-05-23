// from data.js
var tableData = data;


// Insert the data in the table
var tbody = d3.select("tbody");
console.log(tableData);

data.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })

  var input = d3.select("input");
  var button = d3.selectAll(".filter");
  mydict = {};

  function handleclick() {
      var result = d3.select(this).select("input");
      console.log(result);
      var resultvalue = result.property("value");
      console.log(resultvalue);
      var resultid = result.attr("id");
      console.log(resultid);

      mydict[resultid] = resultvalue;
      createnewtable()  
      
      console.log(mydict);
  }

function createnewtable() {
    let newdata = tableData;
    Object.entries(mydict).forEach(function ([key, value]) {
        newdata = newdata.filter(x => x[key] === value) ;         
    });

    var tbody = d3.select("tbody");
    tbody.html("");
    
    newdata.forEach((UFO) => {
      var row = tbody.append("tr");
      Object.entries(UFO).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
    });
};

button.on("change", handleclick);