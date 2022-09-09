(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{469:function(t,e,n){"use strict";n.r(e);var r=n(471);e.default={extends:r.a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)},watch:{data:function(){this.renderChart(this.data,this.options)}}}},470:function(t,e,n){var map={"./af":334,"./af.js":334,"./ar":335,"./ar-dz":336,"./ar-dz.js":336,"./ar-kw":337,"./ar-kw.js":337,"./ar-ly":338,"./ar-ly.js":338,"./ar-ma":339,"./ar-ma.js":339,"./ar-sa":340,"./ar-sa.js":340,"./ar-tn":341,"./ar-tn.js":341,"./ar.js":335,"./az":342,"./az.js":342,"./be":343,"./be.js":343,"./bg":344,"./bg.js":344,"./bm":345,"./bm.js":345,"./bn":346,"./bn-bd":347,"./bn-bd.js":347,"./bn.js":346,"./bo":348,"./bo.js":348,"./br":349,"./br.js":349,"./bs":350,"./bs.js":350,"./ca":351,"./ca.js":351,"./cs":352,"./cs.js":352,"./cv":353,"./cv.js":353,"./cy":354,"./cy.js":354,"./da":355,"./da.js":355,"./de":356,"./de-at":357,"./de-at.js":357,"./de-ch":358,"./de-ch.js":358,"./de.js":356,"./dv":359,"./dv.js":359,"./el":360,"./el.js":360,"./en-au":361,"./en-au.js":361,"./en-ca":362,"./en-ca.js":362,"./en-gb":363,"./en-gb.js":363,"./en-ie":364,"./en-ie.js":364,"./en-il":365,"./en-il.js":365,"./en-in":366,"./en-in.js":366,"./en-nz":367,"./en-nz.js":367,"./en-sg":368,"./en-sg.js":368,"./eo":369,"./eo.js":369,"./es":370,"./es-do":371,"./es-do.js":371,"./es-mx":372,"./es-mx.js":372,"./es-us":373,"./es-us.js":373,"./es.js":370,"./et":374,"./et.js":374,"./eu":375,"./eu.js":375,"./fa":376,"./fa.js":376,"./fi":377,"./fi.js":377,"./fil":378,"./fil.js":378,"./fo":379,"./fo.js":379,"./fr":380,"./fr-ca":381,"./fr-ca.js":381,"./fr-ch":382,"./fr-ch.js":382,"./fr.js":380,"./fy":383,"./fy.js":383,"./ga":384,"./ga.js":384,"./gd":385,"./gd.js":385,"./gl":386,"./gl.js":386,"./gom-deva":387,"./gom-deva.js":387,"./gom-latn":388,"./gom-latn.js":388,"./gu":389,"./gu.js":389,"./he":390,"./he.js":390,"./hi":391,"./hi.js":391,"./hr":392,"./hr.js":392,"./hu":393,"./hu.js":393,"./hy-am":394,"./hy-am.js":394,"./id":395,"./id.js":395,"./is":396,"./is.js":396,"./it":397,"./it-ch":398,"./it-ch.js":398,"./it.js":397,"./ja":399,"./ja.js":399,"./jv":400,"./jv.js":400,"./ka":401,"./ka.js":401,"./kk":402,"./kk.js":402,"./km":403,"./km.js":403,"./kn":404,"./kn.js":404,"./ko":405,"./ko.js":405,"./ku":406,"./ku.js":406,"./ky":407,"./ky.js":407,"./lb":408,"./lb.js":408,"./lo":409,"./lo.js":409,"./lt":410,"./lt.js":410,"./lv":411,"./lv.js":411,"./me":412,"./me.js":412,"./mi":413,"./mi.js":413,"./mk":414,"./mk.js":414,"./ml":415,"./ml.js":415,"./mn":416,"./mn.js":416,"./mr":417,"./mr.js":417,"./ms":418,"./ms-my":419,"./ms-my.js":419,"./ms.js":418,"./mt":420,"./mt.js":420,"./my":421,"./my.js":421,"./nb":422,"./nb.js":422,"./ne":423,"./ne.js":423,"./nl":424,"./nl-be":425,"./nl-be.js":425,"./nl.js":424,"./nn":426,"./nn.js":426,"./oc-lnc":427,"./oc-lnc.js":427,"./pa-in":428,"./pa-in.js":428,"./pl":429,"./pl.js":429,"./pt":430,"./pt-br":431,"./pt-br.js":431,"./pt.js":430,"./ro":432,"./ro.js":432,"./ru":433,"./ru.js":433,"./sd":434,"./sd.js":434,"./se":435,"./se.js":435,"./si":436,"./si.js":436,"./sk":437,"./sk.js":437,"./sl":438,"./sl.js":438,"./sq":439,"./sq.js":439,"./sr":440,"./sr-cyrl":441,"./sr-cyrl.js":441,"./sr.js":440,"./ss":442,"./ss.js":442,"./sv":443,"./sv.js":443,"./sw":444,"./sw.js":444,"./ta":445,"./ta.js":445,"./te":446,"./te.js":446,"./tet":447,"./tet.js":447,"./tg":448,"./tg.js":448,"./th":449,"./th.js":449,"./tk":450,"./tk.js":450,"./tl-ph":451,"./tl-ph.js":451,"./tlh":452,"./tlh.js":452,"./tr":453,"./tr.js":453,"./tzl":454,"./tzl.js":454,"./tzm":455,"./tzm-latn":456,"./tzm-latn.js":456,"./tzm.js":455,"./ug-cn":457,"./ug-cn.js":457,"./uk":458,"./uk.js":458,"./ur":459,"./ur.js":459,"./uz":460,"./uz-latn":461,"./uz-latn.js":461,"./uz.js":460,"./vi":462,"./vi.js":462,"./x-pseudo":463,"./x-pseudo.js":463,"./yo":464,"./yo.js":464,"./zh-cn":465,"./zh-cn.js":465,"./zh-hk":466,"./zh-hk.js":466,"./zh-mo":467,"./zh-mo.js":467,"./zh-tw":468,"./zh-tw.js":468};function r(t){var e=j(t);return n(e)}function j(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=j,t.exports=r,r.id=470},475:function(t,e,n){"use strict";n.r(e);n(15),n(241);var r=n(472),j=n.n(r),o={name:"IndexPage",data:function(){return{publishers:[],valueLabel:"Number of publishers",publishersByDate:[]}},components:{LineChart:n(469).default},computed:{fields:function(){return["Publisher Name","Publisher Registry Id","Activities","Organisations","Files","Total File Size","Hierarchies (count)","Reporting Orgs In Data (count)"].map((function(t){return{key:t,sortable:!0}}))},chartData:function(){return{datasets:[{label:"Number of publishers",fill:!1,data:this.publishersByDate,borderColor:"#6e40aa",borderWidth:3}]}},chartOptions:function(){return{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0,callback:function(t){return t.toLocaleString(void 0,{maximumFractionDigits:0,minimumFractionDigits:0})}},scaleLabel:{display:!0,labelString:this.valueLabel}}],xAxes:[{type:"time",time:{unit:"year"}}]}}}},methods:{getPublishers:function(){var t=this;this.$axios.get("https://analytics.codeforiati.org/publishers.csv").then((function(e){j()().fromString(e.data).then((function(e){t.publishers=e}))}))},getPublishersByDate:function(){var t=this;this.$axios.get("https://stats.codeforiati.org/gitaggregate-dated/publishers.json").then((function(e){t.publishersByDate=Object.entries(e.data).map((function(t){return{x:t[0],y:t[1]}}))}))}},mounted:function(){this.getPublishers(),this.getPublishersByDate()}},l=n(81),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Publishers")]),t._v(" "),e("p",{staticClass:"lead"},[t._v("How many organisations are publishing IATI data?")]),t._v(" "),e("h2",[t._v("Publishers over time")]),t._v(" "),e("p",{staticClass:"lead"},[t._v("This graph shows the number of organisations publishing IATI data over time.")]),t._v(" "),e("b-row",[e("b-col",[e("line-chart",{attrs:{data:t.chartData,options:t.chartOptions}})],1)],1),t._v(" "),e("hr"),t._v(" "),e("b-table",{attrs:{small:"",items:t.publishers,fields:t.fields}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);