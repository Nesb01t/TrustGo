<template>
	<view>
		<!-- 主页面 -->
		<!-- 导航栏 -->
		<div class="navi">
			<div v-for="(item, index) in pageGroup" :key="index" class="navi-group" @click="handleSelect(item.label)">
				<p>{{item.label}}</p>
			</div>
		</div>
	</view>
</template>

<script>
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
				console.log(itemLabel)
			}
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
