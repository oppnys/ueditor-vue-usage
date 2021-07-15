<template>
  <div class="hello">
    <h2>Vue 示例</h2>
    <vue-ueditor-wrap :config="editorConfig" v-model="msg"></vue-ueditor-wrap>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import VueUeditorWrap from 'vue-ueditor-wrap';

export default {
  name: 'HelloWorld',
  components: {
    VueUeditorWrap
  },
  data () {
    return {
      msg: '<h2>Hello World!</h2>',
      editorConfig: {
        initialFrameWidth: "100%",
        initialFrameHeight: 600,
        autoHeightEnabled: false,
        // 访问 UEditor 静态资源的根路径，可参考 https://hc199421.gitee.io/vue-ueditor-wrap/#/faq
        UEDITOR_HOME_URL: "/UEditor/",
        // serverUrl: "//ueditor.szcloudplus.com/cos",
        // serverUrl: "//192.168.3.130/php/controller.php",
        serverUrl: '/iot/ue', //会出现跨域问题，前端采用代理方案
      },
    }
  },
  methods:{
    submit(){
      console.log(this.msg)
    }
  }
}
</script>
