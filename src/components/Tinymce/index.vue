<template>
    <Editor 
        :initial-value="props.content.initialValue"
        id="tipInput" api-key="1pwozs8xlso5h1qydycmzn11dk7t3d0fc0q7arkco6tjx08o"
        :init="init"
        v-model="props.content.value"
    >
    </Editor>
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue';
import { onMounted } from 'vue';

const props = defineProps([
    'content'
])
onMounted(()=>{
    console.log(props.content);
})
const init = {
    selector: "#tipedit",
    language:'zh_CN',
    plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave autoresize formatpainter',
    toolbar: 'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
    styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
    table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs',
    height: 550,
    min_height: 400,
    fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
    font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;',
    link_list: [
        { title: '预置链接1', value: 'http://www.tinymce.com' },
        { title: '预置链接2', value: 'http://tinymce.ax-z.cn' }
    ],
    image_list: [
        { title: '预置图片1', value: 'https://www.tiny.cloud/images/glyph-tinymce@2x.png' },
        { title: '预置图片2', value: 'https://www.baidu.com/img/bd_logo1.png' }
    ],
    image_class_list: [
    { title: 'None', value: '' },
    { title: 'Some class', value: 'class-name' }
    ],
    importcss_append: true,
    toolbar_sticky: true,
    autosave_ask_before_unload: false,
}

</script>