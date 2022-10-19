function findFlight(){
	var from = document.getElementById("from").value;
	var to = document.getElementById("to").value;
	console.log(from);
	console.log('from')
	let url = "https://www.yatra.com/flight-schedule/"+from+"-to-"+to+"-flights.html";
   window.open(url,target='_blank');
}

function findHotel(){
	var hotel = document.getElementById("hotellocation").value;
	let url = "https://www.topranker4u.com/top-five-star-hotels-"+hotel;
   window.open(url,target='_blank');
}