import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/Movie'
import Upcoming from '@/components/upcoming'
import Top250 from '@/components/top250'
import MoviesDetail from '@/components/common/moviesDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie
    },
    {
      path: '/upcoming' ,
      name: 'upcomming',
      component: Upcoming
    },
    {
      path: '/top250' ,
      name: 'top250',
      component: Top250
    },
    {
      path: '/moviesDetail' ,
      name: 'moviesDetail',
      component: MoviesDetail
    }
  ]
})
