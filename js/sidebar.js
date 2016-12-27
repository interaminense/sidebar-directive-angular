var app = angular.module('myApp', []);

app.directive('sidebar', ['$compile', function($compile) {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {

			scope.flag = true;
			scope.body = document.body;
			scope.element = iElement[0];

			//renderize sidebar
			scope.element.style.display = "block";

			//add width on sidebar
			var isNumber = function(n) {
				return !isNaN(parseFloat(n)) && isFinite(n);
			}

			if(isNumber(iAttrs.size))
				scope.element.style.width = iAttrs.size + 'px';
			else
				scope.element.style.width = iAttrs.size;

			//add class to position on sidebar
			scope.element.classList.add("sidebar--" + iAttrs.position);

			//renderize bg-sidebar
			var bgSidebar = document.createElement("div");
			bgSidebar.setAttribute("class", "sidebar-bg");
			bgSidebar.setAttribute("id", iAttrs.id + "-bg");
			bgSidebar.setAttribute("ng-click", "toggleSidebar('"+ iAttrs.id +"')");
			scope.body.appendChild(bgSidebar);

			$compile(bgSidebar)(scope);

			//control body
			var controlBody = function() {
				if(scope.flag)
					scope.body.style.overflowY = "hidden";
				else
					scope.body.style.overflowY = "auto";

				scope.flag = !scope.flag;
			}

			//click to show/hide sidebar
			scope.toggleSidebar = function(idSidebar) {
				var _element = document.getElementById(idSidebar);
				_element.classList.toggle("sidebar--is-open");

				var _bgSidebar = document.getElementById(idSidebar + "-bg");
				_bgSidebar.classList.toggle("sidebar-bg--is-visible");

				//control body
				controlBody();
			}

		}
	};
}]);