<script>
export default {
  name: 'Tinymce'
}
</script>

<script setup>
import { ref, computed } from 'vue'
import Editor from '@tinymce/tinymce-vue'

// https://github.com/tinymce/tinymce-vue/blob/main/src/demo/views/Iframe.vue
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const lang = computed(() => {
  const lang = 'zh'
  if (lang === 'zh') {
    return 'zh_CN'
  } else {
    return 'en'
  }
})

const content = ref(props.modelValue)
const apiKey = ref('64mjv027yic3xknhs3h7m1r84i03e1r1axyzog5514kd3xih')
const init = ref({
  language: lang.value, // 语言类型
  placeholder: '请输入内容', // textarea 中的提示信息
  min_width: 320,
  min_height: 220,
  height: 500, // 注：引入 autoresize 插件时，此属性失效
  resize: 'both', // 编辑器宽高是否可变，false-否, true-高可变，'both'-宽高均可，注意引号
  branding: false, // tiny 技术支持信息是否显示
  statusbar: true, // 最下方的元素路径和字数统计那一栏是否显示
  elementpath: true, // 元素路径是否显示

  //字体样式
  font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;',
  // 插件配置 axupimgs indent2em
  plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount textpattern autosave emoticons help',
  // 工具栏配置，自定义可参考：http://tinymce.ax-z.cn/configure/editor-appearance.php#toolbar
  toolbar: [
    `fullscreen undo redo restoredraft |
     cut copy paste pastetext |
     forecolor backcolor bold italic underline strikethrough link anchor |
     alignleft aligncenter alignright alignjustify outdent indent |
     bullist numlist |
     blockquote subscript superscript removeformat ', 'styleselect formatselect fontselect fontsizeselect |
     table image axupimgs media emoticons charmap hr pagebreak insertdatetime  selectall visualblocks searchreplace |
     code print preview |
     indent2em lineheight formatpainter`
  ],
  // 菜单栏配置，自定义可参考：http://tinymce.ax-z.cn/configure/editor-appearance.php#menubar_level1
  menubar: 'file edit view insert format tools table help',

  // 上传图片和文件参考：http://tinymce.ax-z.cn/general/upload-images.php
  // images_upload_url: '/api/api-upload/uploadimg',  // 后端处理程序的url，建议直接自定义上传函数 image_upload_handler，这个就可以不用了
  // images_upload_base_path: '/demo',  // 相对基本路径
  paste_data_images: true, //图片是否可粘贴
  // 图片上传处理函数
  images_upload_handler: (blobInfo, success, failure) => {
    let reader = new FileReader()
    reader.onloadend = function () {
      const imgbase64 = reader.result
      success(imgbase64)
    }
    reader.readAsDataURL(blobInfo.blob())
  },

  file_picker_types: 'file image media', // file image media分别对应三个类型文件的上传：link插件，image 和 axupimgs 插件，media 插件。想屏蔽某个插件的上传就去掉对应的参数
  // 文件上传处理函数
  file_picker_callback: function (callback, value, meta) {
    // meta.filetype  // 根据这个判断点击的是什么file image media
    let filetype // 限制文件的上传类型,需要什么就添加什么的后缀
    if (meta.filetype == 'image') {
      filetype = '.jpg, .jpeg, .png, .gif, .ico, .svg'
    } else if (meta.filetype == 'media') {
      filetype = '.mp3, .mp4, .avi, .mov'
    } else {
      filetype = '.pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4, .jpg, .jpeg, .png, .gif, .ico, .svg'
    }
    let inputElem = document.createElement('input') // 创建文件选择
    inputElem.setAttribute('type', 'file')
    inputElem.setAttribute('accept', filetype)
    inputElem.click()
    inputElem.onchange = () => {
      let file = inputElem.files[0] // 获取文件信息
      // 所有都转成 base64 文件流，来自官方文档 https://www.tiny.cloud/docs/configure/file-image-upload/#file_picker_callback
      let reader = new FileReader()
      reader.onload = function () {
        // Note: Now we need to register the blob in TinyMCEs image blob
        // registry. In the next release this part hopefully won't be
        // necessary, as we are looking to handle it internally.
        let id = 'blobid' + new Date().getTime()
        let blobCache = tinymce.activeEditor.editorUpload.blobCache
        let base64 = reader.result.split(',')[1]
        let blobInfo = blobCache.create(id, file, base64)
        blobCache.add(blobInfo)
        // call the callback and populate the Title field with the file name
        callback(blobInfo.blobUri(), { title: file.name })
      }
      reader.readAsDataURL(file)
    }
  }
})
</script>

<template>
  <div class="tinymce-container">
    <Editor :modelValue="content" @update:modelValue="value => $emit('update:modelValue', value)" :api-key="apiKey" :init="init" />
  </div>
</template>

<style>
.tinymce-container > textarea {
  display: none;
}

/* 隐藏 apikey 提示 */
/* .tox-notifications-container .tox-notification--warning {
  display: none !important;
} */
</style>
