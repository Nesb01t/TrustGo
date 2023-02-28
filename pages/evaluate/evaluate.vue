<template>
	<view class="evaluate">
		<div @click="handleEvaluate()">单品评估</div>

		<div @click="handleSearch">类搜索</div>
		<div @click="handlePersonal">私人定制</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				disabled: true
			}
		},

		methods: {
			handleEvaluate() {
				uni.navigateTo({
					url: '/pages/evaluate/sub/itemEvaluate'
				})
			},
			handleSearch() {
				uni.navigateTo({
					url: '/pages/evaluate/sub/itemEvaluate'
				})
			},
			handlePersonal() {
				uni.navigateTo({
					url: '/pages/evaluate/sub/customization'
				})
			}
		}
	}
</script>

<style>
	.evaluate {
		overflow: scroll;
	}
</style>
