<template>
	<view>
		<u-navbar title="推荐榜单" @click="goBack" :autoBack="true"></u-navbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goBack() {
				uni.navigateBack();
			}
		}
	}
</script>

<style>

</style>
