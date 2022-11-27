<script setup lang="ts">
import vTopBar from '../components/topbar.vue';
import vSideBar from '../components/sidebar.vue'
import { useSideBarStore } from '@/stores/sidebar';

const sidebar = useSideBarStore()
</script>

<template>
  <v-top-bar/>
  <vSideBar/>
  <div class="content-box" :class="{'conent-collapse' : sidebar.collapse}">
    <div class="content" >
      <RouterView v-slot="{ Component }">
        <transition name="move" mode="out-in">
          <!-- <KeepAlive :include="">
          </KeepAlive> -->
          <component :is="Component"></component>
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
.content-box {
  box-sizing: border-box;
  position: absolute;
  left: 150px;
  right: 10px;
  top: 65px;
  bottom: 0;
  /* padding: 10px 5px 0px; */
  -webkit-transition: left .3s ease-in-out;
  transition: left .3s ease-in-out;
  background: #f0f0f0;
}
.content {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  overflow-y: scroll;
}
.conent-collapse{
  left: 64px;
}
</style>
