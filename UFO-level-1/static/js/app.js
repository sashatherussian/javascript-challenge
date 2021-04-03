// from data.js
var tableData = data;
// creating table for data to be placed in
table = d3.select("tbody")
function make_table(data) {
    // to erase initial table while filtering is being applied so it works properly
    table.html(""); 
    data.forEach((table_row => {var row = table.append("tr");
    Object.values(table_row).forEach((val)=>{var cell = row.append("td");
    // placing values into the created table
    cell.text(val)
})}))}
// filter data based on value of datetime
function on_click(){
var input_date = d3.select("#datetime").property("value");
var new_data = tableData;
new_data = new_data.filter(table_row => table_row.datetime == input_date)
// using newly obtained data to build table created
make_table(new_data);}
d3.select("#filter-btn").on("click", on_click)

// having an initial table built when someone loads the page without an attached filter
make_table(tableData);