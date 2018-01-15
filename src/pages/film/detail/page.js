import { mapState } from 'vuex'

export default {
	name: 'FilmDetail',
	data(){
		return {
			componentName: 'my name is Filmdetail，引用组件的时候重定义了名字为film-detail',
			show: false,
		}
	},
	computed: mapState({
		filmDetail: state => state.film.filmDetail
	}),
	methods: {
		// 写法1
		toggleShow(){
			this.show = !this.show;
		},
		// 写法2
		toggleShow2: function () {
			this.show = !this.show;

		},
		jump: function () {
			// this.$router.push({name:'FilmIndex', params:{ index: '20171225'}});
		},
		changeSelf: function () {
			// this.componentName = '更改组件内部参数了componentName';
		},
		changeName: function () {
			// 会同时改变
			// this.$root.name = 'qianqian-'+ new Date().getTime();
		}
	}
}

