<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.catalog-active>a {
      // 目录激活样式
      color: red!important;
    }
.vue-scroll-response-test {
  &>* {
    box-sizing: border-box;
  }
  height: 100%;
  &>#catalog {
    position: relative;

    height: 100%;
    overflow: auto;
    width: 200px;

    border: 1px solid red;
    position: absolute;
    left: 20px;
  }
  &>#content {
    position: relative;
    height: 100%;
    overflow: auto;
    margin-left: 240px;
    border: 1px solid red;
    h1 a {
      display: block;
      color: #ccc;
      background: black;
      line-height: 100px;
    }
    h2 {
      display: block;
      height: 300px;
      background: #ccc;
      line-height: 2;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.vue-scroll-response-test
  #catalog
    .catalog-item( v-for="v1 in testData")
      h1.title(): a(:href="'#'+v1.title") {{v1.title}}
      h2.title( v-if="v1.children", v-for="v2 in v1.children"): a(:href="'#'+v2.title") {{v2.title}}
  #content(ref="content")
    .content-item(v-for="v1 in testData")
      h1.title(:id="v1.title"): a(:href="'#'+v1.title") {{v1.title}}
      h2.title(v-if="v1.children", v-for="v2 in v1.children",:id="v2.title"): a(:href="'#'+v2.title") {{v2.title}}


</template>

<!-- ——————————————↓JS—————————分界线———————————————————————— -->
<script>
//import XXX from './components/XXX'

export default {
  name: 'vue-scroll-response',
  data() {
    return {
      msg: 'this is from vue-scroll-response.vue',
      testData: [{
        title: '一级目录1',
        children: [{ title: '二级目录11' }, { title: '二级目录12' }, { title: '二级目录13' }]
      },
      {
        title: '一级目录2',
        children: [{ title: '二级目录21' }, { title: '二级目录22' }, { title: '二级目录23' }]
      },
      {
        title: '一级目录3',
        children: [{ title: '二级目录31' }, { title: '二级目录32' }, { title: '二级目录33' }]
      },
      {
        title: '一级目录4',
        children: [{ title: '二级目录41' }, { title: '二级目录42' }, { title: '二级目录43' }]
      },
       {
        title: '一级目录5',
        children: [{ title: '二级目录51' }, { title: '二级目录52' }, { title: '二级目录53' }]
      },
       {
        title: '一级目录6',
        children: [{ title: '二级目录61' }, { title: '二级目录62' }, { title: '二级目录63' }]
      },
       {
        title: '一级目录7',
        children: [{ title: '二级目录71' }, { title: '二级目录72' }, { title: '二级目录73' }]
      },
       {
        title: '一级目录8',
        children: [{ title: '二级目录81' }, { title: '二级目录82' }, { title: '二级目录83' }]
      },
       {
        title: '一级目录9',
        children: [{ title: '二级目录91' }, { title: '二级目录92' }, { title: '二级目录93' }]
      },

      ],
      titlesTopArr: [],
      contentEl: null,
      catalogEl: null,
      contentTitles: null,
      catalogTitles: null,
      activeIndex: ''

    }
  },
  methods: {
  }

}
</script>
