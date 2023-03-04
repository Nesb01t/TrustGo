<template>
	<view>
		<u-navbar title="调取后端数据处" @click="goBack" :autoBack="true"></u-navbar>
		<div class="outside">
			<!-- <u-subsection :list="list" :current="1"></u-subsection>  -->
		</div>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
			    list: ['真实评价', '相似产品排行', '产品分数'],
				current: 1
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
	.outside{
		margin-top: 100px;;
		width: 100%;
	}

</style>
