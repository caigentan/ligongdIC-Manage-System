<template>
	<div class="sidebar">
		<el-menu
			default-active="1"
			class="el-menu-vertical-demo"
			:collapse="sidebar.collapse"
			:background-color="sidebar.bgcolor"
			:text-color="sidebar.txtColor"
			:active-text-color="sidebar.activeTxtColor"
			router
  		>	
			<template v-for="item in sidebar.items">
				<template v-if="item.subs">
					<ElSubMenu :index="item.index" :key="item.index">
						<ElIcon v-html="item.icon"></ElIcon>
						<template #title>
							<span> {{item.title}} </span>
						</template>
					</ElSubMenu>
				</template>
			</template>
			<!-- <template v-for="item in sidebar.items">
				<ElMenuItem :index="item.index">
					<el-icon v-html="item.icon"></el-icon>
					<template #title>
						<span>{{item.title}}</span>
					</template>
				</ElMenuItem>
			</template> -->
		  	
  		</el-menu>
	</div>
</template>

<script setup lang="ts">

import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useSideBarStore } from '@/stores/sidebar';
import { EditPen, Location, House } from '@element-plus/icons-vue';
import { ElIcon, ElSubMenu, type ElMenuItem } from 'element-plus';

const route = useRoute();
const sidebar = useSideBarStore();
const onRoutes = computed(()=>{
	return route.path;
});
</script>

<style scoped>
.sidebar {
	flex: 0;
	width: 150px;
	position: fixed;
	height: 100%;
	left: 0px;
	top: 65px;
	bottom: 0;
	overflow-y: scroll;
	z-index: 99;
	/* background-color: aqua; */
}
.sidebar::-webkit-scrollbar {
	width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {  /* 当菜单收缩时element会给菜单添加el-menu--collapse类 */
	width: 200px;
	min-height: 400px;
}
.sidebar > ul {
	height: 100%;
}
</style>
