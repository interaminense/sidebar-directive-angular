var app = angular.module('myApp', []);

app.controller('sidebar', ['$scope', function($scope){
	
}]);

app.directive('sidebar', [function () {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {

			var _isNumber = function(n) {
				return !isNaN(parseFloat(n)) && isFinite(n);
			}
			
			var element = iElement[0], bg = document.createElement("div");

			element.style.display = 'block';

			//add size on sidebar
			if(_isNumber(iAttrs.size))
				element.style.width = iAttrs.size + 'px';
			else
				element.style.width = iAttrs.size;

			//add class to position on sidebar
			element.classList.add("sidebar--" + iAttrs.position);

			//create element bg
			bg.classList.add("sidebar-bg", iAttrs.id);

			//appen has bg
			if(iAttrs.hasBg === "true")
				document.body.appendChild(bg);

			//click on button to open/close sidebar
			scope.toggleSidebar = function(id) {
				var _element = document.getElementById(id), _bg = document.getElementsByClassName(id)[0];

				_element.classList.toggle("sidebar--is-open");
				_bg.classList.toggle("sidebar-bg--is-visible");
			}

			//click on background to open/close sidebar
			bg.addEventListener("click", function(){
				element.classList.toggle("sidebar--is-open");
				bg.classList.toggle("sidebar-bg--is-visible");
			});

		}
	};
}]);