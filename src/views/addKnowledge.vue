<template>
    <div class="container">
        <div class="form-box" style="padding-bottom: 10px; width 100%">
            <ElForm ref="formRef" :rules="rules" :model="newQuestion" label-width="80px">
                <div>
                    <ElCard
                        shadow="hover"
                        header="知识点"
                    >
                        <ElFormItem label="知识点描述" prop="title">
                            <ElInput
                                v-model="newQuestion.title"
                                :placeholder="'请输入知识点描述'"
                                type="textarea"
                                rows="5"
                            >
                            </ElInput>
                        </ElFormItem>
                        <ElFormItem label="知识类型" prop="type">
                            <ElSelect v-model="newQuestion.type" placeholder="请选择类型" :key="qtypes.types">
                                <ElOption v-for="qitem, qindex in qtypes.types" :key="qindex" :label="qitem.showName" :value="qitem.id" @click="handleTypeIndex(qindex)"></ElOption>
                            </ElSelect>
                            <div style="margin-left: 20px;">
                                <ElSelect v-model="newQuestion.subType" placeholder="请选择子类型" :disabled="!newQuestion.type" :key="checkedType">
                                    <ElOption v-for="subitem, subindex in qtypes.types[checkedType].subTypes" :key="subindex" :value="subitem.subType" :label="subitem.name"></ElOption>
                                </ElSelect>
                            </div>    
                            <ElButton type="primary" @click="onSubmit(formRef)" style="margin-left: 20px;">提交</ElButton>
                            <ElButton type="warning" @click="resetForm(formRef)" style="margin-left: 20px;">重置</ElButton>
                        </ElFormItem>
                    </ElCard>
                 </div>
                <div style="padding-top:5px" v-show="newQuestion.type">
                    <ElCard 
                        shadow="hover"
                        header="解析">
                        <tEditor :content="tinymcess"></tEditor>
                    </ElCard>
                </div>
            </ElForm>
        </div>
    </div>
</template>
<script setup lang="ts" name="editor">
import '@wangeditor/editor/dist/css/style.css';
import { onBeforeUnmount, ref, reactive, shallowRef, onMounted,watch } from 'vue';
import tEditor from '@/components/Tinymce/index.vue';

import { ElButton, ElCard, ElDescriptions, ElForm, ElFormItem, ElInput, ElMessage, ElOption, ElSelect } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import axios from 'axios'
import { useKnowledgeStore } from "@/stores/knowledge";

const tinymcess = reactive({
    initialValue: "",
    value:'',
})
const qtypes = reactive({types:
    [
        {
            "id": "0",
            "name": "",
            "showName": "",
            "subTypes": [
                {
                    "name": "",
                    "subType": "1",
                    "type": "1"
                }
            ]
        }
    ]
    });     
const knowledgeInfo = useKnowledgeStore();
const newQuestion = reactive({
    title: "",
    type: "",
    subType:"",
    answer: ""
});
const checkedType = ref(0)
const formRef = ref<FormInstance>();
const rules:FormRules={
    title:[{required: true, message: "请输入内容", trigger:'blur'}]
};
const editorRef = shallowRef();
const editorConfig = { placeholder: '请输入内容...' }
onMounted(()=>{
    axios.get("http://localhost:8080/knowledge/types")
        .then(function(response){
            qtypes.types = response.data;
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        }) 
})
onBeforeUnmount(() => {
})

const onSubmit = (formEl: FormInstance | undefined) =>{
    if(!formEl) return;
    formEl.validate((valid)=> {
        if(valid) {
            newQuestion.answer = tinymcess.value
            axios.post('http://localhost:8080/knowledge/add', newQuestion)
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                })
            ElMessage.success("提交成功！");
        } else {
            
            return false;
        }
    })
}
function handleTypeIndex(index) {
    checkedType.value = index;
    console.log(checkedType.value);
}
function resetForm(formEl: FormInstance | undefined) {
    if(!formEl) return;
    formEl.resetFields();
}


</script>