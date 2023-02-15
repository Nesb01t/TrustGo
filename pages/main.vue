<template>
	<view>
		<Evaluate v-if="currentPage=='评估'"></Evaluate>
		<Discuss v-if="currentPage=='社区'"></Discuss>
		<Personal v-if="currentPage=='我的'"></Personal>
		<u-tabbar :value='currentPage' :placeholder="false" :fixed="true" :safeAreaInsetBottom="false">
			<u-tabbar-item :text="item.text" :name="item.text" icon="search" v-for="(item, index) in pageGroup" :key="index"
				@click="handleSelect(item.text)"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import Evaluate from './evaluate/evaluate.vue'
	import Discuss from './discuss/discuss.vue'
	import Personal from './personal/personal.vue'
	export default {
		data() {
			return {
				currentPage: "评估",
				pageGroup: [{
						text: "评估",
					},
					{
						text: "社区",
					},
					{
						text: "我的",
					}
				],
			}
		},
		methods: {
			handleSelect(page) {
				console.log('click: ', page);
				this.currentPage = page
			}
		},
		components: {
			Evaluate,
			Discuss,
			Personal
		},

	}
</script>

<style lang="scss">

</style>
