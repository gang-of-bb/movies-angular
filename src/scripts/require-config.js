require.config({
	baseUrl: '/scripts/',
	paths:{
		'jQuery' : '/scripts/vendors/jquery',
		'angular' : '/scripts/vendors/angular',
		'bootstrap' : '/scripts/vendors/bootstrap',
		'toastr' : '/scripts/vendors/toastr',
	},
	shim: {
    	'angular' : {'exports' : 'angular'},
    	'jQuery': {'exports' : 'jQuery'},
    	'toastr': {'exports' : 'toastr'},
    	'bootstrap': ['jQuery']
    }
});