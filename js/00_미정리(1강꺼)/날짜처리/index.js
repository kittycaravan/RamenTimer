function br(){
    document.write("<br>");
}


var now = new Date();

document.write("현재 시간은 :" + now.toLocaleTimeString());

br();

document.write("현재 시간은 :" + now.toLocaleString());

br();


var year = now.getFullYear();

document.write("연도:"+year);

br();

var month = now.getMonth() + 1; // +1 해야됨

document.write("달:"+month);

br();

var day = now.getDate();

document.write("날:"+day);

br();

