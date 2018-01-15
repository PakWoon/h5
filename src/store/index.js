// 我们组装模块并导出 store 的地方
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'
import film from './modules/film'

Vue.use(Vuex)


const store = new Vuex.Store({
	strict: true,
	state: {
		wapid: 'wy_H5',
		location: {
			id: '',
			name: '',
		},
		cinema: {
			id: '',
			linkId: '',
			name: '',
			address: '',
		},
		user: {
			sid: '',
			tid: '',
			account: {
				accountId: '',
				accountName: '',
				mobile: '',
				mobileCountryCode: '',
				mobileBinded: false,
				gender: 0,
			}
		}
	},
	actions,
	mutations,
	modules: {
		film
	}
})

export default store
