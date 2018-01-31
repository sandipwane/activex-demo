require('winax');
var ExcelApp = new ActiveXObject("Excel.Application");
var ExcelSheet = new ActiveXObject("Excel.Sheet");   
// Make Excel visible through the Application object.  
ExcelSheet.Application.Visible = true;  
// Place some text in the first cell of the sheet.  
ExcelSheet.ActiveSheet.Cells(1,1).Value = "This is column A, row 1";  
// Save the sheet.  
ExcelSheet.SaveAs("C:\\TEST.XLS");  
// Close Excel with the Quit method on the Application object.  
ExcelSheet.Application.Quit();


// var con = new ActiveXObject('WScript.Shell');
// con.Exec("C:/Program Files/Git/git-bash.exe")
// console.log(con);
// IRAST3SNPMReaderWriter.

// var con = new ActiveXObject('ARST3SNMPReaderWriter');
// console.log(con);

