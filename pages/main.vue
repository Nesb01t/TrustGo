<template>
	<view>
		<Evaluate v-if="currentPage=='评估'"></Evaluate>
		<Discuss v-if="currentPage=='社区'"></Discuss>
		<Personal v-if="currentPage=='我的'"></Personal>
		<u-tabbar
			:value="value1"
			:placeholder="false"
			@change="name => value1 = name"
			:fixed="true"
			:safeAreaInsetBottom="false"
			
		>
		    <u-tabbar-item text="评估" icon="search" v-for="(item, index) in pageGroup" :key="index" @click="click1(item.text)" ></u-tabbar-item>
			<u-tabbar-item text="社区" icon="photo"  @click="click1(item.text)" ></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account" @click="click1(item.text)" ></u-tabbar-item>
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
				currentPage: '评估',
				pageGroup: [{
					    text: "评估"
					},
					{
						text: "社区"
					},
					{
						text: "我的"
					}
					
				],
				value1: 1,
			}
		},
		methods: {
			click1(itemLabel) {
				console.log('click1', itemLabel);
				this.currentPage = itemLabel
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
