<template>
    <div class="header">
        <div class="collapse-btn" @click="collapseChage">
            <ElIcon v-if="sidebar.collapse"><Expand/></ElIcon>
            <ElIcon v-else><Fold/></ElIcon>
        </div>
        <div class="logo">理工地</div>
        <div class="header-right">
            <div class="header-user-con">
                <div class="btn-bell" @click="router.push('/')">
                    <ElTooltip
						effect="dark"
                        :content="message ? `有${message}条未读消息` : `消息中心`"
                        placement="top"
					>
						<ElIcon><Bell/></ElIcon>
                    </ElTooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
                <el-avatar class="user-avator" :size="30" :src="imgurl" />
                <ElDropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}}
                        <ElIcon class="el-icon-right">
                            <ArrowDown />
                        </ElIcon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
							<a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
								<el-dropdown-item>项目仓库</el-dropdown-item>
							</a>
							<el-dropdown-item command="user">个人中心</el-dropdown-item>
							<el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
						</el-dropdown-menu>
                    </template>
                </ElDropdown>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
// import { ElDropdown, ElIcon, ElTooltip } from 'element-plus';
import { useSideBarStore } from '../stores/sidebar';
import { useRouter } from 'vue-router';
import type { arrow } from '@popperjs/core';
import imgurl from '../assets/img/img.jpg';
import { Expand, Fold, ArrowDown, Bell, House } from '@element-plus/icons-vue';
const sidebar = useSideBarStore();
const router = useRouter();
const username: string | null = localStorage.getItem('ms_username');
const message: number = 2;

const collapseChage = () => {
	sidebar.handleCollapse();
};

const handleCommand = (command: string) => {
	if (command == 'loginout') {
		localStorage.removeItem('ms_username');
		// router.push('/login');
        console.log('loginout')
	} else if (command == 'user') {
		console.log('user')
	}
};
</script>
<style scoped>
.header {
	position: fixed;
	box-sizing: border-box;
	left:0;
	right: 0;
	height: 65px;
	font-size: 22px;
	color: rgb(71, 7, 145);
    background-color: #14a0c4;
	float: left;
	z-index: 100;
}
.collapse-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	float: left;
	padding: 0 21px;
	cursor: pointer;
}
.header .logo {
	float: left;
	width: 250px;
	line-height: 70px;
}
.header-right {
	float: right;
	padding-right: 50px;
}
.header-user-con {
	display: flex;
	height: 70px;
	align-items: center;
}
.btn-fullscreen {
	transform: rotate(45deg);
	margin-right: 5px;
	font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
	position: relative;
	width: 30px;
	height: 30px;
	text-align: center;
	border-radius: 15px;
	cursor: pointer;
	display: flex;
	align-items: center;
}
.btn-bell-badge {
	position: absolute;
	right: 4px;
	top: 0px;
	width: 8px;
	height: 8px;
	border-radius: 4px;
	background: #f56c6c;
	color: #fff;
}
.btn-bell .el-icon-lx-notice {
	color: #fff;
}
.user-name {
	margin-left: 10px;
}
.user-avator {
	margin-left: 20px;
}
.el-dropdown-link {
	color: #fff;
	cursor: pointer;
	display: flex;
	align-items: center;
}
.el-dropdown-menu__item {
	text-align: center;
}

[class*=" el-icon-"], [class^=el-icon-] {
    /* speak: none; */
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>