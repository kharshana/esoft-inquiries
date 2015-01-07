// Content Resize

app.directive('resizable', function ($window) {
    return function ($scope) {
        $scope.initializeWindowSize = function () {
            var windowHeight = $window.innerHeight;
            var windowWidth = $window.innerWidth;
            var headerHeight = angular.element('header').innerHeight();
            var sidebarWidth = angular.element('.sidebar').innerWidth();
            var contentHeight = windowHeight - headerHeight + 'px';
            var contentWidth = windowWidth - sidebarWidth + 'px';

            $scope.resizable = {
                "height": contentHeight,
                    "margin-top": headerHeight,
                    "width": contentWidth
            }

            return $scope.resizable;
        };
        $scope.initializeWindowSize();
        return angular.element($window).bind('resize', function () {
            $scope.initializeWindowSize();
            return $scope.$apply();
        });
    };
});

// Tooltips

app.directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                $(element).tooltip('show');
            }, function(){
                $(element).tooltip('hide');
            });
        }
    };
});

// Top Navbar Dropdowns

app.directive('notifications', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).on('click', 'li' ,function(){
                $(element).find('li').removeClass("active");
                $(this).addClass("active");
                //$(element).find("li").not(this).find('.dropdownCont').fadeOut('fast');
                $(this).find('.dropdownCont').fadeToggle('fast');
                return false;
            });

            $("html").not(".notifications > li, .user-profile > li").on('click',function(){
                $('.dropdownCont').fadeOut('fast');
            });
                
            $(element).find('.dropdownCont, .dropdownCont a').on('click',function(){
                return false;
            });
        }
    };
});

// Google Material Design effect for buttons

app.directive('mbutton', function(){
    return {
        restrict: 'AC',
        link: function(scope, element, attrs){
           
            $(element).mawbutton({
                speed : 250,
                scale : 6,
                effect : "ripple",
                transitionEnd:function(){
                    //console.log('end');
                }
            });

        }
    };
});
