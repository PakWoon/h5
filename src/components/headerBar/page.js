
export default {
	name: 'header-bar',
	data(){
		return {
			display: false, //是否开启
			left: {
				text: '',
				iconClass: 'icon-back',
				clickFun: function() {
					history.go(-1);
				}
			},
			right: {
				text: '',
				iconClass: '',
				clickFun: function() {
					
				}
			},
			//single 单行标题 content[标题]，multiple 多行标题 content[标题，小标]，toggle 切换按钮 content[按钮1，按钮2]
		    middle: {
		        // type: 'single',
		        // content: ['页面标题']
		        // type: 'multiple',
		        // content: ['页面标题', '小标注']
		        type: 'toggle',
		        content: [{
		            text: '按钮1',
		            clickFun: function(obj, index, callback) {
		                // debugger
		                // if (index !== obj.headerBar.middle.selectIndex) {
		                //     obj.headerBar.middle.selectIndex = index;
		                //     if (callback) { callback() }
		                // }
		            }
		        }, {
		            text: '按钮2',
		            clickFun: function(obj, index, callback) {
		                // if (index !== obj.headerBar.middle.selectIndex) {
		                //     obj.headerBar.middle.selectIndex = index;
		                //     if (callback) { callback() }
		                // }
		            }
		        }],
		        selectIndex: 0
		    }
		}
	} 
}
