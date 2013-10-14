require.config({
	baseUrl: '/scripts/',
	paths:{
		'jQuery' : '/scripts/vendors/jquery',
		'angular' : '/scripts/vendors/angular',
		'bootstrap' : '/scripts/vendors/bootstrap',
		'toastr' : '/scripts/vendors/toastr',
		'nicescroll' : '/scripts/vendors/jquery.nicescroll'
	},
	shim: {
    	'angular' : {'exports' : 'angular'},
    	'jQuery': {'exports' : 'jQuery'},
    	'toastr': {'exports' : 'toastr'},
    	'nicescroll': {'exports' : 'nicescroll'},
    	'bootstrap': ['jQuery']
    }
});