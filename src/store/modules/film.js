import api from '../../api'
// import * as types from '../mutation-types'

// 影片模块
export default {
	// 实际上 actions／mutations是不分模块的！！！！直接引用 this.$store.dispatch('getHotFilms')
	// 所以namespaced: true使其成为命名空间,之后引用方式this.$store.dispatch('film/getHotFilms')
	namespaced: true, 
	state: {
		name: 'film',
		hotFilmList: [],
		soonFilmList: [],
		filmDetail: {
			filmId: '',
			filmName: '',
			// and so on
		},
	},

	mutations: {
		// [types.SET_HOT_FILMS] (state, { data }) {
		// 	console.log('SET_HOT_FILMS....',data);
		// 	state.hotFilmList = data.data.bizValue;
		// },
		// [types.SET_FILM_DETAIL] (state, { data }) {
		// 	state.filmDetail = data;
		// 	console.log('filmDetail=',data)
		// },

		setMutations: function(state, { name, data } ){
			state[name] = data;
		}
	},
	actions: {
		getHotFilms: ({ state, commit, rootState }) => {
			const params = {}; // 暂时不传参数
			api.getHotFilms(params,(data)=>{
				// commit(types.SET_HOT_FILMS, {  data })
				commit('setMutations', { name: 'hotFilmList', data: data.data.bizValue } )
			})
		},
		setFilmDetail: ({ state, commit, rootState }, data ) => {
			// console.log('setFilmDetail data=',data)
			// commit(types.SET_FILM_DETAIL, { data })
			commit('setMutations', { name: 'filmDetail', data: data } )
		}
	}
}