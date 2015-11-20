// rank, word, part of speech, frequency, dispersion
function parseTable(table) {
    var myTable = [],
        myLabels = [];
    
    $('tr:first-child td',table).each(function(){
        myLabels.push($(this).text().trim());    
    })
    
    $('tr',table).each(function(){
        var rowObj = {};
        
        $('td',this).each(function(){
            rowObj[myLabels[$(this).index()]] = $(this).text().trim();
        });
        
        myTable.push(rowObj);
    });
    return myTable;
}
var wordsTable = parseTable($('table'));