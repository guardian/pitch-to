function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

console.log("js");

loadJSON("http://interactive.guim.co.uk/docsdata-test/1oKlNvvQ3JHMC05xYWBmVaYUm67Inj2pj3Myuo8W_yKY.json", function(data) {
        console.log(data);
	    var eventTitle = data.sheets.Elevate[0].Title;
	    var eventDate = data.sheets.Elevate[0].Date;
	    var eventDescription = data.sheets.Elevate[0].Description;
        var eventLink = data.sheets.Elevate[0].Link;
	    document.getElementsByClassName('event')[0].getElementsByTagName('h2')[0].innerHTML = eventTitle;
	    document.getElementsByClassName('event')[0].getElementsByClassName('date')[0].innerHTML = eventDate;
        document.getElementsByClassName('event')[0].getElementsByClassName('description')[0].innerHTML = eventDescription;
        document.getElementsByClassName('event')[0].getElementsByClassName('button--register')[0].setAttribute("href", eventLink);

}, function(xhr) {
    console.log("error");
});
