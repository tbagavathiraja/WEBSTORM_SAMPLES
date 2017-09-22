var XLSX=require('xlsx');
var fs=require("fs")

var xl=XLSX.readFile("/home/system/WebstormProjects/node_samples/XLREAD/ECE-WIPRO.xlsx")
var sheet_name_list=xl.SheetNames;

var temp=""
var temp1=""
var prev=1;
sheet_name_list.forEach(function(y) {
    var worksheet = xl.Sheets[y];

    for(sheet_obj in worksheet) {


        if(sheet_obj[0] == '!') continue;
        for (var i = 0; i < sheet_obj.length; i++) {
            if (!isNaN(sheet_obj[i])) {
                tt = i;
                break;
            }
        };
        var col = sheet_obj.substring(0,tt);
        var row = parseInt(sheet_obj.substring(tt));
        var value = worksheet[sheet_obj].v;

//console.log(sheet_obj+" "+col+" "+row+" "+value)
        if(col<'E') {
            if (row-1<=prev) {
                temp1 = temp1 + value + ",";
                continue
            }

        }

        if (row-1<=prev&&col<='E') {
            temp1 = temp1.substring(0, temp1.length-1)
            temp = temp + temp1+"\n";
            temp1 = ""
        }

        if (row-1<=prev)
            prev = row;
    }

});

fs.writeFile("data.csv",temp,{blankrows:false})
var csv_stream_obj=XLSX.stream.to_csv(temp,{blankrows:false});
console.log(csv_stream_obj)

fs.writeFile("stream_obj.csv",csv_stream_obj,{blankrows:false})