import { defineStore } from "pinia";

export const useSideBarStore = defineStore('sidebar', {
    state: ()=>{
        return {
            collapse: false,
            bgcolor: "#324157",
            txtColor: "#bfcbd9",
            activeTxtColor: "#20a0ff",
            items: [
                {
                    icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"></path></svg>',
                    index: '/',
                    title: '系统首页',
                    permiss: '1',
                },{
                    icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path d="m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z" fill="currentColor"></path></svg>',
                    title: '知识点',
                    permiss: '2',
                    subs:[
                        {
                            index: '/knowledgeList',
                            title: '所有知识点',
                            permiss: '3'
                        },{
                            index: '/addknowledge',
                            title: '新增知识点',
                            permission: '4'
                        }
                    ]
                },{
                    icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"></path></svg>',
                    index: '/dashboard',
                    title: '留下备用',
                    permiss: '3',
                }
            ]
        };
    },
    getters: {},
    actions: {
        handleCollapse() {
            this.collapse  = !this.collapse;
        }
    }
})