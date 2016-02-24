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
        console.log(data.sheets.Elevate.length);

        for(i=0; i<data.sheets.Elevate.length; i++){
	        function addEvent(){
		        var card = document.createElement("div");
                var eventTitle = data.sheets.Elevate[i].Title;
				var eventDate = data.sheets.Elevate[i].Date;
				var eventDescription = data.sheets.Elevate[i].Description;
				var eventLink = data.sheets.Elevate[i].Link;
                var eventStatus = data.sheets.Elevate[i].Status;

				card.setAttribute('class', 'event_wrapper status__'+ eventStatus + '')
				card.innerHTML = '<div class="event"><h2>'+ eventTitle + '</h2>' + '<p class="time">'+ eventDate + '</p>' + '<p class="description">'+ eventDescription + '</p>' + '<a class="button button--event"' + ' href="' + eventLink + '"></a></div>';
				var event = document.getElementsByClassName('events_container')[0];
				event.appendChild(card);
	        }

	        addEvent();
        }

        function format(){
                document.getElementsByClassName('status__Off')[0].setAttribute('id', 'first__Off');
                document.getElementsByClassName('status__On')[0].setAttribute('id', 'first__On');
            }
            format();
}, function(xhr) {
    console.log("error");
});
