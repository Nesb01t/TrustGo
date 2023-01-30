<template>
	<view>
		<!-- 主页面 -->
		<Evaluate v-if="currentPage=='评估'"></Evaluate>
		<Discuss v-if="currentPage=='社区'"></Discuss>
		<Personal v-if="currentPage=='我的'"></Personal>
		<!-- 导航栏 -->
		<div class="navi">
			<div v-for="(item, index) in pageGroup" :key="index" class="navi-group" @click="handleSelect(item.label)">
				<p>当前：{{currentPage}}</p>
				|
				<p>{{item.label}}</p>
			</div>
		</div>
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
						label: "评估"
					},
					{
						label: "社区"
					},
					{
						label: "我的"
					}
				]
			}
		},
		methods: {
			handleSelect(itemLabel) {
				this.currentPage = itemLabel
			}
		},
		components: {
			Evaluate,
			Discuss,
			Personal
		}
	}
</script>

<style lang="scss">
	.navi {
		background: yellow;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 10%;
		display: flex;
		justify-content: space-between;

		.navi-group {
			width: 33.3333%;
			border: solid 2px red;
			display: flex;
			align-items: center;
			justify-content: center;

			.navi-group p {
				margin-top: 50%;
				transform: translateY(-50%);
			}
		}
	}
</style>
