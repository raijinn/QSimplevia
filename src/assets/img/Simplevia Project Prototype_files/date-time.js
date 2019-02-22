window.onload = setInterval(refresh, 1000);

function refresh() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    var day = d.getDay();
    var time = d.toLocaleTimeString();

    var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    month = monthArr[month];

    var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    day = dayArr[day];

    document.getElementById("year").innerHTML = year;
    document.getElementById("month").innerHTML = month;
    document.getElementById("date").innerHTML = date;
    document.getElementById("day").innerHTML = day;
    document.getElementById("time").innerHTML = time;

}