(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{214:function(t,e,n){"use strict";var c={name:"PostsLists",created:function(){this.$store.dispatch("posts/getArticles")},computed:{articles:function(){return this.$store.state.posts.articles}}},r=n(27),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-4 d-flex justfy-content-center flex-column"},t._l(t.articles,(function(article){return n("div",{key:article.id},[n("b-card",{attrs:{id:"b-card"}},[n("b-card-text",[n("p",[t._v(" "+t._s(article.description)+" ")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(article.content)}})])],1)],1)})),0)}),[],!1,null,null,null);e.a=component.exports},226:function(t,e,n){"use strict";n.r(e);var c={components:{PostsLists:n(214).a},head:function(){return{title:"Post single"}}},r=n(27),component=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h3",[this._v("Posts page")]),this._v(" "),e("PostsLists")],1)}),[],!1,null,null,null);e.default=component.exports}}]);