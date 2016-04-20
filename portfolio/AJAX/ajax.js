$(document).ready(function() {
	$("#pressBtn").click(function() {
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?",   
			function(images) {
				$.each(images.items, function(i, item) {
					var pics = "<div>";
					pics += "<h2>" + item.title + "</h2>";
					pics += "<img src=" + item.media.m + ">" + "<br>";
					pics += "<em>" + item.author + "</em>" + "<br>";
					pics += "<button id='" + i + "' author-id='" + item.author_id + "'>" + "Users favorites" + "</button>";
					pics += "</div>";

					$("#flickrPosts").append(pics);

					console.log($("#" + i).attr("author-id"));

					$("#" + i).click(function() {
						$.getJSON("https://api.flickr.com/services/feeds/photos_faves.gne?id=" + item.author_id + "&format=json&jsoncallback=?",
							function(images) {
								var txt = item.author;
								re = /\((.*)\)/;
								alert(txt.match(re)[1] + " have " + images.items.length + " favorites.");		
					});

				});	
			});
		});
	});
});
