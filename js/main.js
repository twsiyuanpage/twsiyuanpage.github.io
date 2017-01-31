requirejs.config({
	paths: { 
		'jquery': ['https://code.jquery.com/jquery-2.1.4.min'],
		'bootstrap': ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min'],
		'google-analytics': ['./google-analytics.min'],
	},
	shim: {
		'bootstrap' :{
          deps: ["jquery"],
         // exports: "$.fn.popover"
        }
	},
});

require(['jquery', 'bootstrap', 'google-analytics'], function(){
});