(function () {

var vueScrollResponse = {}

vueScrollResponse.install = function (Vue) {
  Vue.directive('scroll-response', {
    inserted: function (el, { value }, vnode) {
      // 初始化
      // el 作为 dom元素获取context
      var contentScrollEl = document.getElementById(value.contentId)
      var catalogScrollEl = document.getElementById(value.catalogId)
      // 目录容器中的标题和内容容器中的标题一一对应，指定统一的类
      var contentTitles = contentScrollEl.querySelectorAll(value.title)
      var catalogTitles = catalogScrollEl.querySelectorAll(value.title)


      // 记录旧的激活的目录索引
      var oldActiveIndex = 0
      var titlesTopArr = []


      // titlesTopArr初始化
      var initTitlesTopArr = () => {
        for (var i = 1; i < contentTitles.length; i++) {

          titlesTopArr.push(contentTitles[i].offsetTop)
        }
        // 最后一项为 scrollHeight，在滚动函数中赋值（可能会变化）
        titlesTopArr.push(contentScrollEl.scrollHeight)
      }
      // titlesTopArr初始化
      initTitlesTopArr()

      // 方法

      // 移除className
      var _removeClass = (el, className) => {
        el.className = el.className.replace(className, '')
      }
      // 添加className
      var _addClass = (el, className) => {
        el.className += (' ' + className)
      }
      // 初始化第一个目录class
      _addClass(catalogTitles[0], 'catalog-active')
      if (value.contentTitleActive != 'off') _addClass(contentTitles[0], 'catalog-active')



      // 内容区滚动时，动态设置activeId
      var addActiveClass = (e) => {
        var sTop = e.target.scrollTop
        for (var i = 0; i < titlesTopArr.length; i++) {
          if (sTop < titlesTopArr[i]) {
            // 只有当前激活的index改变了,才会进行演示切换
            if (i != oldActiveIndex) {
              _addClass(catalogTitles[i], 'catalog-active')
              _removeClass(catalogTitles[oldActiveIndex], 'catalog-active')

              // 内容区标题激活样式是否开启
              if (value.contentTitleActive != 'off') {
                _addClass(contentTitles[i], 'catalog-active')
                _removeClass(contentTitles[oldActiveIndex], 'catalog-active')
              }
              oldActiveIndex = i
            }
            break
          }
        }
      }
      // 滚动内容区时，目录不在视野去时的处理
      var catalogMiss = () => {
        var activeCatalog = catalogScrollEl.getElementsByClassName('catalog-active')[0]
        // 在下面看不见 || 在上面看不见
        if (activeCatalog.offsetTop + activeCatalog.offsetHeight >= (catalogScrollEl.scrollTop + catalogScrollEl.clientHeight)) {
          catalogScrollEl.scrollTop = activeCatalog.offsetTop

        } else if (activeCatalog.offsetTop < catalogScrollEl.scrollTop) {
          catalogScrollEl.scrollTop = activeCatalog.offsetTop - catalogScrollEl.offsetHeight + activeCatalog.offsetHeight * 2

        }
      }
      // scroll 事件函数
      var contentScroll = (e) => {
        addActiveClass(e)
        catalogMiss()
      }

      // 滚动事件
      contentScrollEl.addEventListener('scroll', contentScroll)
    }
  })
}

// 输出
if (typeof exports == "object") {
  module.exports = vueScrollResponse
} else if (typeof define == "function" && define.amd) {
  define([], function () {
    return vueScrollResponse
  })
} else if (window.Vue) {
  window.vueScrollResponse = vueScrollResponse;
  Vue.use(vueScrollResponse)
}
})()

export default vueScrollResponse
