var app = angular.module('myApp', []);

app.directive('sidebar', [function () {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {

			var _isNumber = function(n) {
				return !isNaN(parseFloat(n)) && isFinite(n);
			},
			bg = document.createElement("div"),
			btn = document.getElementById(iAttrs.name),
			element = iElement[0];

			element.style.display = 'block';

			//add size on sidebar
			if(_isNumber(iAttrs.size))
				element.style.width = iAttrs.size + 'px';
			else
				element.style.width = iAttrs.size;

			//add class to position on sidebar
			element.classList.add("sidebar--" + iAttrs.position);

			//create element bg
			bg.classList.add("sidebar-bg");

			//appen has bg
			if(iAttrs.hasBg === "true")
				document.body.appendChild(bg);

			//checks if the button makes reference to sidebar
			if(btn != null){

				//click to open/close sidebar
				btn.addEventListener("click", function(){
					element.classList.toggle("sidebar--is-open");
					bg.classList.toggle("sidebar-bg--is-visible");
				});

				bg.addEventListener("click", function(){
					element.classList.toggle("sidebar--is-open");
					bg.classList.toggle("sidebar-bg--is-visible");
				});
			}else{
				console.warn("the button has no id or have standing before the", iAttrs.name);
			}

		}
	};
}]);