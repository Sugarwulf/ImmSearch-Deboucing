namespace debouncing.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('debouncing').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('debouncing').service('myService', MyService);
    }
