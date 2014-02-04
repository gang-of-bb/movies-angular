//
// Requirejs configuration.
//
require.config({
    baseUrl: '/scripts/',
    paths: {
        'jQuery': 'vendors/jquery',
        'angular': 'vendors/angular',
        'bootstrap': 'vendors/bootstrap',
        'toastr': 'vendors/toastr',
        'nicescroll': 'vendors/jquery.nicescroll'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'jQuery': {
            'exports': 'jQuery'
        },
        'toastr': {
            'exports': 'toastr'
        },
        'nicescroll': {
            'exports': 'nicescroll'
        },
        'bootstrap': ['jQuery']
    }
});