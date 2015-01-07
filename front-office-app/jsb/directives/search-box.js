app.directive('getSearch', function ($window) {
    return {
        restrict: 'AE',
        templateUrl: 'views/search-box.html',
        link: function (scope, element, attributes) {
        	
            // Search options dropdowns

            $('.search-addons li .ico').on('click',function(){
                $(this).parent().addClass("active");
                $(".search-addons li .ico").not(this).parent().find('.drop').fadeOut('fast');
                $(this).parent().find('.drop').fadeToggle('fast');
                return false;
            });
            
            $('.drop,.datepicker,.datepicker table tr td').on('click',function(){
                return false;
            });
            
            $('.search-area').on('click',function(){
                $('.search-addons .drop').hide();
            });

            // On focus search

            $('.search-box input[type="search"]').focus(function() {
              $('.search-addons .drop').hide();
            });
            


        }
    };
});



