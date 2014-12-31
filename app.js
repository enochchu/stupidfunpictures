$(function() { 
	var buildGallery = function(item, data) {
		var galleryContainer = document.getElementById("gallery");
		var gallerySections = document.createElement("div");
		var heading = document.createElement("h2");

		gallerySections.className = "container";
		gallerySections.id = item;
		heading.innerHTML = item;

		gallerySections.appendChild(heading);

		for (var image in data[item]) {
			var imageContainer = document.createElement("div");
			var imageLink = document.createElement("a");
			var imageTag = document.createElement("img");
			var imageUrl = "https://raw.githubusercontent.com/enochchu/stupidfunpictures/master/gif/" + item + "/" + data[item][image];
			var inputUrlTag = document.createElement("input")

			imageLink.href = imageUrl;
			imageLink.target = "_blank";
			imageTag.src = imageUrl;
			inputUrlTag.value = imageUrl;
			inputUrlTag.disabled = true;

			imageContainer.className = "image";

			imageLink.appendChild(imageTag);

			imageContainer.appendChild(imageLink);
			imageContainer.appendChild(inputUrlTag);

			gallerySections.appendChild(imageContainer);
		}

		galleryContainer.appendChild(gallerySections);
	};

	var buildNavigation = function(data) {
		var navigation = document.querySelector("#menu .navigation");

		for (var item in data) {
			var menuItem = document.createElement("span");
			var menuLink = document.createElement("a");

			menuItem.className = "item";
			menuLink.href="#" + item;
			menuLink.innerText = item;

			menuItem.appendChild(menuLink);
			navigation.appendChild(menuItem);
		}
	};

	// Init

	$.getJSON("data.json", function(data) {
		buildNavigation(data);

		for (var item in data) {
			buildGallery(item, data);
		}
	});

	(function() {
		var menu = document.getElementById("menu");
		var menuX = menu.offsetHeight;

		window.addEventListener("scroll", function() {
			var scrollY = window.scrollY;

			if (scrollY > menuX) {
				menu.classList.add("fixed");
			} else {
				menu.classList.remove("fixed");
			}
		});
	})(this);
});