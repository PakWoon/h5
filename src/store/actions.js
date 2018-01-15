// 跟级别的action

import api from '../api'
// import * as types from './mutation-types'

export const getCinemas = ({ commit }) => {
	const params = {}; // 暂时不传参数
	api.getCinemas(params,(data)=>{
		commit('setMutations', { name: 'location', data: {
			id: data.data.bizValue.cities[1].cityCode,
			name: data.data.bizValue.cities[1].cityName
		} })
		commit('setMutations', { name: 'cinema', data: {
			linkId: data.data.bizValue.cities[1].cinemas[3].cinemaLinkId,
			name: data.data.bizValue.cities[1].cinemas[3].cinemaName
		} })
	})
}