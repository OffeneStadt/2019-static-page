;(function($) {
    "use strict";
    
    
    /*----------------------------------------------------*/
    /*  Google Map
    /*----------------------------------------------------*/        
    function initialize() {
        var mapOptions = {
            zoom: 15,
            scrollwheel: false,
            streetViewControl: false,
            mapTypeControl: false,
            scaleControl: false,
            // center: new google.maps.LatLng(22.952635, 91.282526),
            center: new google.maps.LatLng(53.5434675, 9.9853118),
            styles: [
                {"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},        
                {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#e3e3e3"},{"lightness":20}]},
                {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},
                {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},
                {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},
                {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
                {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#c0c0c0"},{"lightness":21}]},
                {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},
                ]
        };
        var map = new google.maps.Map(document.getElementById('googleMap'),
        mapOptions);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    
})(jQuery)