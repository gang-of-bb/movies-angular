require.config({
	baseUrl: '/scripts/',
	paths:{
		'jQuery' : '/scripts/vendors/jquery',
		'angular' : '/scripts/vendors/angular',
		'bootstrap' : '/scripts/vendors/bootstrap',
		'toastr' : '/scripts/vendors/toastr',
		'ng-infinite-scroll' : '/scripts/vendors/ng-infinite-scroll'
	},
	shim: {
    	'angular' : {'exports' : 'angular'},
    	'jQuery': {'exports' : 'jQuery'},
    	'toastr': {'exports' : 'toastr'},
    	'ng-infinite-scroll': {'exports' : 'ng-infinite-scroll'},
    	'bootstrap': ['jQuery']
    }
});