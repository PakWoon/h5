import { mapState } from 'vuex'
import HeaderBar from '../../../components/headerBar'

export default {
	name: 'FilmIndex',
	data(){
		return {
			componentName: 'my name is film-index, 引用方式：<film-index>',
		}
	},
	components: {
		HeaderBar
	},
	computed: mapState({
        hotFilmList: state => state.film.hotFilmList
    }),
	created: function () {
			// console.log('我是film/index的created....');
			this.init();
	},
	methods: {
		init: function () {
			// console.log(this.$store.state.film.hotFilmList)
			// 获取列表
            // this.$store.dispatch('getCinemas')
            this.$store.dispatch('film/getHotFilms')

		},
		gotoDetail: function (item) {
			const that = this;
			// console.log(this.$router)
			this.$store.dispatch('film/setFilmDetail', item).then(()=>{
				// set storage
			}).then(()=>{
				that.$router.push({ path: '/film/detail'})
			})
		}
	}
}