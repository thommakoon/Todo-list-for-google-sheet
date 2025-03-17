function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  
  // Specify the range of your entire data set
  var lastRow = sheet.getLastRow();
  var dataRange = sheet.getRange("A2:D" + lastRow); // Adjust the range based on your data
  
  // Get the values in the range
  var data = dataRange.getValues();
  
  // Separate checked and unchecked rows
  var checkedRows = [];
  var uncheckedRows = [];
  
  data.forEach(function(row) {
    if (row[3] === true) { // Assuming checkboxes are in column D (index 3)
      checkedRows.push(row);
    } else {
      uncheckedRows.push(row);
    }
  });
  
  // Sort unchecked rows by date and time in column C (index 2)
  uncheckedRows.sort(function(a, b) {
    return new Date(a[2]) - new Date(b[2]); // Sort by ascending order
  });
  
  // Combine unchecked and checked rows
  var sortedData = uncheckedRows.concat(checkedRows);
  
  // Set the sorted data back to the sheet
  dataRange.setValues(sortedData);
}
