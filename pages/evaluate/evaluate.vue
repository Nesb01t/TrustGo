<template>
	<view class="evaluate">
		<div class="search">
			<u-icon name="search" size="100px" @click="handleEvaluate()"></u-icon>
		</div>
		
		<div class="button">
			<u-row justify="space-between" gutter="0">
				<u-col span="5">
					<u-button type="primary" class="button" @click="handleSearch">类搜索</u-button>
				</u-col>
				<u-col span="5">
					<u-button type="primary" class="button" @click="handlePersonal">私人定制</u-button>
				</u-col>
			</u-row>
		</div>
		
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
		background-color: aliceblue;
		height: 100%;
	}
	.search{
		background-color: lightcoral;
		height:20%;
		width:26%;
		margin-top:30%;
		margin-left:37%;
	}
	.button{	
		margin:48% auto 20% auto;
	}
</style>
