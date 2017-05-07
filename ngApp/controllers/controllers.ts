namespace debouncing.Controllers {

    export class HomeController {
        public movies;
        public search;

        constructor(private $http: ng.IHttpService) {
            // this.$http.get('/api/movies/search')
            // .then((response) => {
            //   this.movies = response.data;
            // })
            // .catch((response) => {
            //   console.error('Could not retrieve movies.');
            // });
        }
        fetch() {
            if (this.search) {
                this.$http.get('/api/movies/search/' + this.search)
                    .then((response) => {
                        this.movies = response.data;
                    }).catch((response) => {
                        console.log('Could not retrieve movies');
                    });
            }
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}

/*namespace debouncing.Controllers {

  const apiURL = '/api/movies/search/';

    export class HomeController {
        public search;
        public movies;

        fetch() {
        if (this.search) {
          console.log('searching');
          this.$http.get(apiURL + this.search)
          .then((results) => {
            this.movies = results.data;
          });
        }
      }
 constructor(private $http: ng.IHttpService) { }
    }
    export class AboutController {
        public message = 'Hello from the about page!';
    }

}*/
