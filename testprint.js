var Printer = require('node-printer');
var options = {
    media: 'Custom.200x600mm',
    n: 3
};
 
// Get available printers list 
Printer.list();
 
// Create a new Pinter from available devices 
var printer = new Printer('Doro PDF Writer');
 
// Print from a buffer, file path or text 
var fileBuffer = fs.readFileSync('/path/to/file.ext');
var jobFromBuffer = printer.printBuffer(fileBuffer);
 
var filePath = 'package.json';
var jobFromFile = printer.printFile(filePath);
 
var text = 'Print text directly, when needed: e.g. barcode printers'
var jobFromText = printer.printText(text);
 
// Cancel a job 
jobFromFile.cancel();
 
// Listen events from job 
jobFromBuffer.once('sent', function() {
    jobFromBuffer.on('completed', function() {
        console.log('Job ' + jobFromBuffer.identifier + 'has been printed');
        jobFromBuffer.removeAllListeners();
    });
});
