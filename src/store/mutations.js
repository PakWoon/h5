// 根级别的mutations
// import * as types from './mutation-types'

export default {
	// 保存城市&影院
	// [types.SET_CINAMES] (state, { data }) {
	// 	console.log('保存城市&影院SET_CINAMES....',data);
	// 	state.location = {
	// 		id: data.data.bizValue.cities[1].cityCode,
	// 		name: data.data.bizValue.cities[1].cityName,
	// 	};
	// 	state.cinema = {
	// 		linkId: data.data.bizValue.cities[1].cinemas[3].cinemaLinkId,
	// 		name: data.data.bizValue.cities[1].cinemas[3].cinemaName,
	// 	}
	// }

	setMutations: function(state, { name, data } ){
			state[name] = data;
		}
}