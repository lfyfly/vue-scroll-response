<!-- —————————————↓SCSS———————分界线————————————————————————— -->
<style lang="scss">
.vue-scroll-response {
  &>* {
    box-sizing: border-box;
  }
  height: 100%;
  &>.catalog {
    position: relative;
    .catalog-active a {
      // 目录激活样式
      color: red;
    }
    height: 100%;
    overflow: auto;
    width: 200px;

    border: 1px solid red;
    position: absolute;
    left: 20px;
  }
  &>.content {
    position: relative;
    height: 100%;
    overflow: auto;
    margin-left: 240px;
    border: 1px solid red;
    h1 a {
      display: block;
      height: 100px;
      background: black;
    }
    h2 {
      display: block;
      height: 50px;
      background: #ccc;
    }
  }
}
</style>

<!-- —————————————↓HTML————————分界线———————————————————————— -->
<template lang="pug">
.vue-scroll-response
  .catalog(ref="catalog")
    .catalog-item( v-for="v1 in testData")
      h1.title(): a(:href="'#'+v1.title") {{v1.title}}
      h2.title( v-if="v1.children", v-for="v2 in v1.children"): a(:href="'#'+v2.title") {{v2.title}}
  .content(@scroll="contentScroll",ref="content")
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
      }
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
    contentScroll(e) {
      this.setActiveId(e)
      this.catalogMiss()
    },
    // 内容区滚动时，动态设置activeId
    setActiveId(e) {
      var sTop = e.target.scrollTop
      for (var i = 0; i < this.titlesTopArr.length - 1; i++) {
        if (sTop < this.titlesTopArr[i]) {
          this.activeIndex = i
          break
        }
      }
    },
    // 滚动内容区时，目录不在视野去时的处理
    catalogMiss() {
      var activeCatalog = this.$el.getElementsByClassName('catalog-active')[0]
      // 在下面看不见 || 在上面看不见
      if (activeCatalog.offsetTop > (this.catalogEl.scrollTop + this.catalogEl.clientHeight) || (activeCatalog.offsetTop + activeCatalog.offsetHeight) < this.catalogEl.scrollTop) {
        this.catalogEl.scrollTop = activeCatalog.offsetTop
      }
    },
    initContentEl() {
      this.contentEl = this.$refs.content
    },
    initCatalogEl() {
      this.catalogEl = this.$refs.catalog
    },
    initContentTitles() {
      this.contentTitles = this.contentEl.getElementsByClassName('title')
    },
    initCatalogTitles() {
      this.catalogTitles = this.catalogEl.getElementsByClassName('title')
    },
    initActiveIndex() {
      this.activeIndex = 0
    },
    // 所有title元素（除了第一个目录，已经默认激活）的offsetTop数组
    initTitlesTopArr() {
      for (var i = 1; i < this.contentTitles.length - 1; i++) {
        this.titlesTopArr.push(this.contentTitles[i].offsetTop)
      }
    },
    _removeClass(el,className) {
      el.className = el.className.replace(className,'')
    },
    _addClass(el,className) {
      el.className += (' '+className)
    },
    init() {
      this.initContentEl()
      this.initCatalogEl()
      this.initContentTitles()
      this.initCatalogTitles()
      this.initActiveIndex()
      this.initTitlesTopArr()
    },


  },
  mounted() {
    this.init()
  },
  watch: {
    'activeIndex': function (newIndex, oldIndex) {
      if(oldIndex!=='') this._removeClass(this.catalogTitles[oldIndex],'catalog-active')
      this._addClass(this.catalogTitles[newIndex],'catalog-active')
    }
  }
}
</script>
