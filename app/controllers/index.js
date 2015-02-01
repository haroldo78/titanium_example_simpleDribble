if (!$.index) {
	alert('splitwindow test app only works on iPad');
} else {
	function loadThumbnails (){
    for (var i = 0; i < shots.length; i++) { // loops for each image  
	        var thumb = Ti.UI.createImageView({  // creates thumb
	            image:shots[i].image_teaser_url, // sets image to smaller version of image
	            largeImage:shots[i].image_url, // remembers URL of full size image for later use
	            player:shots[i].player,  // remembers information on user who created image
	            height:150, // sets height
	            top:i*170, // positions from top
	        });
	    thumb.addEventListener("touchstart", function(e){
	    	$.mainImage.image = e.source.largeImage;
	    	$.popoverTitle.title = e.source.player.name;
    		$.profilePic.image = e.source.player.avatar_url;
    		$.twitterName.text = e.source.player.twitter_screen_name;
    		$.location.text = e.source.player.location;
	    });
	    $.scroll.add(thumb);  // adds thumb to scrollview
	    }  
	}
	var jsonObject;
	var shots;
	var myRequest = Ti.Network.createHTTPClient({
		onload : function(e){
			jsonObject = JSON.parse(this.responseText);
			shots = jsonObject.shots;
			console.log(shots.length);
			console.log(shots[0].image_teaser_url);
			loadThumbnails();
		},
		onerror : function(e){
			alert(e.error);
		},
		timeout : 5000
	});
	myRequest.open("GET","http://api.dribbble.com/shots/popular");
	myRequest.send();
	$.mainImage.addEventListener('touchstart', function(e) 
	{ 
	    $.popover.show({view : $.mainImage});
	});
	$.index.open();
}