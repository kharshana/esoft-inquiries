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

// Datepicker

app.directive('datepicker', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).datepicker();
        }
    };
});

// Google Material Design effect for buttons

app.directive('button', function(){
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

// Add `Active` Class to menu items

app.directive('clickActive', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
           
            $(element).on('click',function(){
                $(element).parent().parent().find('li > a').removeClass('active');
                $(this).addClass('active');
            });

        }
    };
});

// Search box `Drop down addons`

app.directive('getSearch', function($window) {
    return {
        restrict: 'AE',
        templateUrl: 'views/search-box.html',
        link: function(scope, element, attributes) {

            // Search options dropdowns

            $('.search-addons li .ico').on('click', function() {
                $(this).parent().addClass("active");
                $(".search-addons li .ico").not(this).parent().find('.drop').fadeOut('fast');
                $(this).parent().find('.drop').fadeToggle('fast');
                return false;
            });

            $('.drop,.datepicker,.datepicker table tr td').on('click', function() {
                return false;
            });

            $('.search-area').on('click', function() {
                $('.search-addons .drop').hide();
            });

            // On focus search

            $('.search-box input[type="search"]').focus(function() {
                $('.search-addons .drop').hide();
            });
        }
    };
});
