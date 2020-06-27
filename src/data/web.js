const arr = [
    {
        "title": "var和let、const的区别？",
        "answer": [
            "var是ES5语法，存在变量提升",
            "let不存在变量提升，有块级作用域，不可重复声明",
            "const声明常量，有块级作用域，不可重复声明"
        ]
    },
    {
        "title": "typeof返回哪些类型",
        "answer": ["undefined、function、object、Number、Boolean、symbol"],
    },
    {
        "title": "列举强制类型转换和隐式类型转换",
        "answer": [
            "强制类型转换：parseInt ,parseFloat,toString等",
            "隐式类型转换：if，逻辑运算，拼接字符串，=="
        ]
    },
    {
        "title": "手写对象深度比较",
        "answer": "",
        "code": `
const debounce = (fn, time = 200) => {
    let timer = 0;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, time)
    }
}
const throttle = (fn, time = 200) => {
    let timer = 0;
    return function () {
        if (timer) return
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, time)
    }
}
        `,
    },
    {
        "title": "split()和join()的区别",
        "answer": [
            'split将字符串以指定分隔符切割转成数组',
            'join将数组转为字符串，用指定分隔符分隔'
        ]
    },
    {
        "title": "数组的pop，push，unshift，shift分别做什么",
        "answer": [
            'push像数组末尾推入一个元素，返回新数组的长度',
            'unshift向数组开头插入一个数组，返回新数组的长度',
            'pop删除末尾的数组，返回被删除的元素',
            'shift删除开头的数组，返回被删除的元素'
        ]
    },
    {
        "title": "数组slice和splice的区别",
        "answer": [
            'slice截取数组指定区间内的元素生成新的数组返回',
            'splice删除或替换指定位置开始的多少个元素，返回被删除的元素的数组'
        ]
    },
    {
        "title": "[10,20,30].map(parseInt)的执行结果",
        "answer": '[10,NaN,NaN]'
    },
    {
        "title": "手写bind函数",
        code: `
Object.prototype.myBind = function () {
    let arg = [...arguments]
    let that = arg.shift()
    return ()=> {
        this.apply(that,arg)
    }
}`
    },
    {
        "title": "ajax请求get和post的区别",
        "answer": [
            'get一般用于查询操作，post用于提交操作',
            'get请求参数拼接在url上，post放在请求体内（数据量可能很大）',
            '安全性：post可以预防CSRF跨站请求伪造'
        ]
    },
    {
        "title": "函数call和apply的区别？",
        "answer": [
            '相同点：他们都是让执行函数的this指向方法的第一个参数，不同点：',
            'call：this之后的参数逐个传入',
            'apply：this后面的参数以数组的形式传入',
        ]
    },
    {
        "title": "事件代理是什么？",
        "answer": '根据事件冒泡的原理，在需要监听的元素的祖先元素监听事件，用event.target判断触发事件的元素'
    },
    {
        "title": "请描述一下原型和原型链",
        "answer": [
            'JavaScript是一种简易的脚本语言，其是由对象构成。每一个JavaScript对象（除null外）都和另一个对象相关联，“另一个”对象就是原型。也就是说，任何一个对象都有原型这个属性。',
            '隐式原型（_proto_）：上面说的这个原型是JavaScript中的内置属性[[prototype]]，此属性继承自object对象，在脚本中没有标准的方式访问[[prototype]]，但Firefox、Safari和Chrome在每个对象上都支持一个属性_proto_。隐式原型的作用是用来构成原型链，实现基于原型的继承',
            '显示原型（prototype）：每一个函数在创建之后，便会拥有一个prototype属性，这个属性指向函数的原型对象。显示原型的作用是用来实现基于原型的继承与属性的共享'
        ],
        answerImg: [
            'https://wx2.sbimg.cn/2020/06/08/QQ20200608185943.png'
        ]
    },
    {
        "title": "闭包是什么，有什么特性，有什么负面影响？",
        answer: [
            '闭包就是能够读取其他函数内部变量的函数。',
            '封闭性：外界无法访问闭包内部的数据，如果在闭包内声明变量，外界是无法访问的，除非闭包主动向外界提供访问接口；',
            '持久性：一般的函数，调用完毕之后，系统自动注销函数，而对于闭包来说，在外部函数被调用之后，闭包结构依然保存在。',
            '缺点：由于闭包携带包含它函数的作用域，因此比其他函数占用的内存更多。',
            '闭包可以读取函数内部的局部变量；这些变量的值始终保存在内存中。函数执行后，函数执行环境的作用域会被销毁，但是活动对象不会销毁，只有将匿名函数销毁后才可以销毁活动对象。可以将保存函数的变量赋值为null，将可销毁匿名函数作用域。'
        ]
    },
    {
        "title": "如何阻止事件冒泡和默认行为？",
        "answer": [
            'event.stopPropageation()',
            'event.preventDefault()'
        ]
    },
    {
        "title": "查找添加删除移动DOM节点的方法？"
    },
    {
        "title": "如何减少DOM操作？",
        "answer": [
            '缓存DOM查询结果；',
            '多次DOM插入合并到一次插入；',
            '使用文档片段：document.createDocumentFragment()'
        ]
    },
    {
        "title": "解释JSONP的原理，为何他不是真正的ajax？",
        "answer": '访问资源文件时不受跨域限制，，客户端以请求文件的形式将请求发送给服务端，服务端根据参数返回处理过的数据给前端，前端通过callback去接收，真正的ajax应该是XHRHttpRequest'
    },
    {
        "title": "document load和ready的区别",
        "answer": "load是所有资源都加载完毕，包括视频，图片等，ready不包括图片视频等。"
    },
    {
        "title": "==和===的区别？"
    },
    {
        "title": "函数声明和函数表达式的区别",
        "answer": [
            '函数声明 function fn() {...}',
            '函数表达式 const fn = function(){...}；',
            '函数声明会在代码执行前预加载，而函数表达式不会；'
        ]
    },
    {
        "title": "new Object()和Object.create()的区别",
        "answer": [
            'new Object()等同于直接{}声明，原型是Object.prototype；',
            'Object.create()创建一个新对象，并将传入的参数绑定在新对象的隐式原型上；',
            'Object.create(null)没有原型；'
        ]
    },
    {
        "title": "关于this的场景题"
    },
    {
        "title": "关于作用域和自由变量的场景题"
    },
    {
        "title": "手写字符串trim方法，保证浏览器兼容性",
        "answer": "正则"
    },
    {
        "title": "获取多个数字中的最大值",
        "code": "Math.max(10,20,30,50,20)"
    },
    {
        "title": "如何用JS实现继承？",
        "answer": [
            '类式继承',
            '构造函数继承',
            '组合继承',
            '寄生组合继承',
            'extends',
            'https://juejin.im/entry/58dfbe0361ff4b006b166388'
        ]
    },
    {
        "title": "如何捕获JS程序中的异常",
        "answer": [
            'try，catch手动捕获',
            'window.onerror自动捕获'
        ]
    },
    {
        "title": "什么叫JSON",
        "answer": [
            '本身是一种数据格式，本质是一段字符串；',
            'Json和JS对象结构一致，对JS语言更加友好；',
            'JSON.stringify和JSON.parse去转换；',
            'JSON中的key和string必须且只能用双引号包裹'
        ]
    },
    {
        "title": "获取当前url中的参数",
        "answer": [
            'location.search',
            'URLSearchParams'
        ],
        code: `let params = new URLSearchParams(location.search)
console.log(params.get('a'))`
    },
    {
        "title": "将url参数解析为JS对象",
        code: `export default function getParams() {
    let params = {}
    let search = location.search;
    search = search.substring(1);
    let searchs = search.split('&')
    searchs.forEach(item=>{
        let keyAndVal = item.split('=');
        params[keyAndVal[0]] = keyAndVal[1]
    })
    return params
}`
    },
    {
        "title": "手写数组flatern，考虑多层级",
        code: `Array.prototype.unique = function () {
    let isDeep = this.some(item => item instanceof Array)
    if (!isDeep) return this;
    // 以下两种写法一样的
    const res = Array.prototype.concat.apply([], this)
    // const res = [].concat(...this);
    return res.unique()
}`
    },
    {
        "title": "数组去重",
        code: `Array.prototype.deduplication = function () {
    let arr = new Set(this);
    return [...arr]
}`
    },
    {
        "title": "手写深拷贝",
        code: `const deepCopy = (obj) => {
    let copyObj = obj instanceof Array ? [] : {};
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copyObj[key] = deepCopy(obj[key])
        }
    }
    return copyObj
}`
    },
    {
        "title": "介绍一下RAF requestAnimationFrame",
        "answer": [
            '想要动画流畅，更新频率需要达到60fps，即16.67ms；',
            'setTimeout需要手动控制，RAF浏览器自动控制；',
            '后台标签或隐藏iframe中，RAF会暂停，setTimeout依然执行；'
        ]
    },
    {
        "title": "前端性能如何优化，主要从哪几方面考虑",
        "answer": [
            '加载更快，渲染更快，页面操作更流畅',
        ],
        'answerImg': [
            'https://wx1.sbimg.cn/2020/06/08/QQ20200608160722.png',
            'https://wx2.sbimg.cn/2020/06/08/QQ20200608160921.png'
        ]
    },
    {
        "title": "arguments是什么，什么状态下不可用，是一个什么类型的变量？",
        "answer": 'arguments是应对与传递给函数的参数的类数组对象，在箭头函数中不可用'
    },
    {
        "title": "v-show和v-if的区别？",
        "answer": [
            '(1)v-show通过css display控制显示和隐藏；',
            '(2)v-if组件真正的渲染和销毁，而不是隐藏和显示；',
            '(3)频繁切换使用v-show，否则使用v-if；'
        ]
    },
    {
        "title": "为何会在v-for中使用key？",
        "answer": [
            '(1)必须用key，且不是random和index；',
            '(2)diff算法中通过tag和key来判断是否是sameName（相同）；',
            '(3)减少渲染次数，提升性能。'
        ]
    },
    {
        "title": "描述Vue的生命周期",
        'answer': [
            '创建前后>挂载前后>更新前后>销毁前后',
            '有父子组件时，创建或挂载前的钩子由外向内触发，创建或挂载后的钩子自内向外触发。'
        ],
        "answerImg": [
            'https://wx1.sbimg.cn/2020/06/03/e8e770bc00ee905853f31a98772fbd7b.png'
        ]
    },
    {
        "title": "组件通信方式（常见）",
        "answer": [
            '父传子props',
            '子传父$emit',
            '自定义组件：event.$on event.$off event.$emit',
            'vuex'
        ]
    },
    {
        "title": "描述组件渲染和更新的过程",
        "answerImg": [
            'https://wx1.sbimg.cn/2020/06/03/3da574e4eb310a836410d74f1d39c978.png'
        ]
    },
    {
        title: '双向数据绑定的实现原理',
        answer: [
            'Input元素的value=this.name',
            '绑定input事件this.name = $event.target.value',
            'data更新触发重新渲染'
        ]
    },
    {
        title: '实现一个自定义v-model',
        code: `<template>
    <input type="text"
           :value="value"
           @input="e=>{$emit('input',e.target.value)}"
    />
</template>

<script>
    export default {
        name: "VModel",
        // 定制prop和event
        // model: {
        //     prop: "val",
        //     event: "change"
        // },
        props: {
            value: {
                type: String,
                default:''
            }
        }
    }
</script>`
    },
    {
        title: '对MVVM的理解',
        answerImg: [
            'https://wx1.sbimg.cn/2020/06/03/mvvm.png'
        ]
    },
    {
        title: 'computed的特点？',
        answer: [
            '缓存，data不变不会重新计算',
            '合理使用可以提高性能'
        ]
    },
    {
        title: '为何data必须是一个函数？',
        answer: '我们定义的组件实际上是一个个class，每次在使用的时候实际上是对class的实例化，如果是变量的会影响别的组件'
    },
    {
        title: 'ajax请求应该放在哪个生命周期？',
        answer: [
            '应该放在mounted中；',
            'JS本身是异步的，ajax是异步获取数据；',
            '就算ajax很早就返回，也需要排队等待js执行完成之后处理，只会让逻辑更加混乱；',
            '个人感觉其实都差不多。'
        ]
    },
    {
        title: '多个组件有相同的逻辑如何抽离？',
        answer: 'mixins'
    },
    {
        title: '何时使用异步组件？',
        answer: [
            '加载大组件',
            '路由懒加载'
        ]
    },
    {
        title: '何时使用keep-alive？',
        answer: 'keep-alive是缓存组件在不需要重复渲染但是需要切换显示隐藏状态的，如多个静态tab页切换，可以起到性能优化的作用。'
    },
    {
        title: '何时使用beforeDestory？',
        answer: [
            '解绑自定义事件event.$off；',
            '清除计时器；',
            '解绑自定义DOM事件；',
            '关闭websocket请求；'
        ]
    },
    {
        title: 'vuex中action和mutation有何区别？',
        answer: [
            'action中执行异步操作，mutation不可以；',
            'mutation属于原子级操作，一个只做一件事；',
            'action可以整合多个mutation；'
        ]
    },
    {
        title: 'Vue-router常用的路由模式，原理是什么？',
        answer: [
            'hash（默认）：通过windows.onhashchange实现',
            'history（需要服务端支持）：通过history.pushState和window.onpopState实现。'
        ]
    },
    {
        title: '如何配置Vue-router异步加载？',
        answer: '默认component接受导入的组件本身，配置异步加载的话需要接受一个import()'
    }
    ,
    {
        title: '请使用vnode描述一个DOM结构',
        link: [{
            title: "渲染函数-vue官网",
            target: "https://cn.vuejs.org/v2/guide/render-function.html"
        }]
    },
    {
        title: '监听data变化的核心api是什么？如何实现深度监听以及监听数组？有何缺点？',
        answer: [
            'Object.defineProperty。',
            '深度监听需要通过递归把对象的每个属性都用Object.defineProperty处理一下。监听数组需要重写数组方法：使用Object.create创建一个对象，原型链指定为Array的原型链，为该属性添加数组常用方法如push,pop等，方法中写一些监听操作，在方法的尾部调用Array原型链上的同名方法，将相应参数都传进去。最后在递归data时如果data的类型是数组的话，就将该数组的隐式原型赋值成刚才创建的对象。',
            '缺点：',
            '深度监听需要一次性递归到底，计算量大；',
            '无法监听对象新增/删除方法，Vue.$set Vue.$delete',
            '无法原生监听数组改变。',
            '在Vue3中使用Proxy重构。'
        ],
        answerImg: [
            'https://wx2.sbimg.cn/2020/06/08/1.png'
        ]
    },
    {
        title: 'diff算法的时间复杂度',
        answer: [
            'O(n)',
            '是从O(n^3)优化来的，优化了，一次只对比同一层级，不跨级比较，tag不同就直接返回，tag和key都相同就判断为是同一节点，不再深度比较。'
        ]
    },
    {
        title: '请描述响应式原理',
        link: [{
            title: "响应式原理-vue官网",
            target: "https://cn.vuejs.org/v2/guide/reactivity.html"
        }]
    },
    {
        title: '简述diff算法过程',
        answer: [
            'patch(elem,vnode)和patch(vnode,newVnode)；',
            'patchVnode、addVnodes、removeVnodes',
            'updateChildren（key的重要性）'
        ]
    },
    {
        title: 'Vue为何是异步渲染，$nextTick何用？',
        answer: [
            '合并data修改以提高性能；',
            '$nextTick在dom更新完后出发回调；'
        ]
    },
    {
        title: '请实现一个自定义指令',
        link: [{
            title: "自定义指令-vue官网",
            target: "https://cn.vuejs.org/v2/guide/custom-directive.html"
        }]
    },
    {
        title: 'Vue性能优化',
        answer: [
            '合理使用v-show和v-if',
            '合理使用异步组件和路由懒加载；',
            '合理使用computed，因为computed会缓存结果，只有在data发生改变时才重新计算；',
            '合理使用keep-alive；',
            'data层数不宜过深，递归次数太多；'
        ]
    },
    {
        title: 'v-if和v-for同时使用执行顺序',
        answer: '先for再if，应避免同时使用，可将v-if移动到for的父级容器或在computed中过滤'
    },
    {
        title: '在宽高不确定的情况下使元素垂直居中，写出两种方案',
        answer: [
            'flex布局；',
            '定位；',
            'Table布局；',
            'Grid布局；'
        ]
    },
    {
        title: '浏览器加载dom的过程',
        answer: [
            '浏览器根据html生DOM Tree，根据css生成CSSOM；',
            '将DOM Tree和CSSOM整合成Render Tree；',
            '根据Render Tree渲染页面；',
            '如果遇到JS代码，就会停下等待JS代码执行完成之后再继续渲染，因为JS本身可能会改变DOM结构，会造成资源浪费；',
            '如果遇到资源文件如图片或视频，就给他预留一个位置继续往下渲染，等待加载完成再插入之前的位置即可。'
        ]
    },
    {
        title: '设计一个响应式模型，兼容移动端',
        answer: ''
    },
    {
        title: '只用css但是不能用width和height实现一个正方形',
        answer: '我也不会'
    },
    {
        title: "以下代码的执行顺序和原理",
        titleImg: [
            'https://wx1.sbimg.cn/2020/06/08/QQ20200608190646.png'
        ],
        answer: ''
    },
    {
        title: "什么是埋点，为什么埋点，怎么设计？",
        answer: [
            '获取用户行为以及跟踪产品在用户端的使用情况，并以监控数据为基础，指明产品优化的方向。',
            '前端监控可以分为三类：数据监控、性能监控和异常监控。',
            '常见的前端埋点方案分为三种：代码埋点、可视化埋点、无埋点。',
            '代码埋点：就是以嵌入代码的形式进行埋点，比如需要监控用户的点击事件，会选择在用户点击时，插入一段代码，保存这个监听行为或者直接将监听行为以某一种数据格式直接传递给server端。此外比如需要统计产品的PV和UV的时候，需要在网页的初始化时，发送用户的访问信息等。代码埋点的优点：可以在任意时刻，精确的发送或保存所需要的数据信息。缺点：工作量较大，每一个组件的埋点都需要添加相应的代码。',
            '可视化埋点:通过可视化交互的手段，代替代码埋点。将业务代码和埋点代码分离，提供一个可视化交互的页面，输入为业务代码，通过这个可视化系统，可以在业务代码中自定义的增加埋点事件等等，最后输出的代码耦合了业务代码和埋点代码。可视化埋点听起来比较高大上，实际上跟代码埋点还是区别不大。也就是用一个系统来实现手动插入代码埋点的过程。缺点：可视化埋点可以埋点的控件有限，不能手动定制。',
            '无埋点并不是说不需要埋点，而是全部埋点，前端的任意一个事件都被绑定一个标识，所有的事件都别记录下来。通过定期上传记录文件，配合文件解析，解析出来我们想要的数据，并生成可视化报告供专业人员分析因此实现“无埋点”统计。从语言层面实现无埋点也很简单，比如从页面的js代码中，找出dom上被绑定的事件，然后进行全埋点。优点：由于采集的是全量数据，所以产品迭代过程中是不需要关注埋点逻辑的，也不会出现漏埋、误埋等现象。缺点：无埋点采集全量数据，给数据传输和服务器增加压力，无法灵活的定制各个事件所需要上传的数据'
        ]
    },
    {
        title: "Module，chunk，bundle的区别？",
        answer: [
            'Module：源码中的各个文件，css、js、img，webpack中一切皆模块；',
            'chunk：多个模块合并成的，如enrty，import，splitChunk；',
            'bundle：最终的输出文件。'
        ]
    },
    {
        title: "loader和plugin有何区别？请列举常见的loader和plugin。",
        answer: [
            'loader是转换器，如scss->css；',
            'plugin是扩展插件，如htmlWebpackPlugin；',
            'Babel-loader、css-loader、style-loader、stylus-loader、file-loader、url-loader、postcss-loader。',
            'DefinePlugin、DllPlugin、DllreferencePlugin、clearWebpackPlugin、htmlWebpackPlugin，Vue-loader-plugin'
        ]
    },
    {
        title: "如何关闭热更新，热更新原理是什么？",
        answer: [
            'devServer.hot改为false；'
        ]
    },
    {
        title: "前端为什么要进行打包和构建？",
        answer: [
            '体积更小（Tree-shaking，压缩，合并），加载更快；',
            '编译高级语言或语法（TS，ES6+，模块化，scss）；',
            '兼容性和错误检查（Polyfill，postcss，eslint）；',
            '统一高效的开发环境；',
            '统一的构建流程和产出标准；',
            '集成公司构建规范（提测，上线等）；'
        ]
    },
    {
        title: "babel-polyfill和babel-runtime的区别？",
        answer: 'babel-polyfill会污染全局环境，babel-runtime不会，如果是开发第三方插件一定要使用babel-runtime。'
    },
    {
        title: 'Webpack如何实现懒加载？',
        answer: 'webpack原生兼容懒加载，直接用import()即可'
    },
    {
        title: '为何Proxy不能被Polyfill？',
        answer: '如Class可以用function模拟，Promise可以用callback模拟，但是Promise的功能用Object.defineProperty无法模拟；'
    },
    {
        title: 'webpack性能优化',
        answer: [
            'Babel-loader开启缓存，没有修改过的不用再次编译，includes明确范围',
            '多进程打包：happyPack，ParallerUgifyPlugin；',
            '自动刷新；',
            '热更新；',
            'DllPlugin动态链接库插件；',
            '小图片用base64字节码；',
            'bundle加hash命中缓存；',
            '懒加载；',
            '提取公共代码和第三方代码；',
            'CDN加速（PublicPath）；',
            'production模式打包，可以压缩代码，vue、React等第三方库会删除调试代码，启动Tree-shaking（ES6 import导入才可以，commonjs导入不可以）；',
            'Scope-hosting：多个函数合并一个函数，代码体积更小，创建函数作用域更小；'
        ]
    },
    {
        title: 'ES6 import和commonjs有何不同？',
        answer: 'import是编译时导入，commonjs是使用时导入，导入的东西有没有用到只有在编译的时候直接明确才能进行tree-shaking；'
    },
    {
        title: '移动端点击事件会有什么问题，如何避免？',
        answer: '会有移动端300ms延迟和点击穿透的问题。300ms延迟是因为浏览器需要一点时间来判断用户到底是click还是touchmove，使用fastclick库可以解决，原理是使用touchend事件替换click事件。'
    },
    {
        title: "mixins融合规则",
        answer: [
            '钩子会按照传入顺序调用，而组件自身的会在执行完之后调用；',
            'data，methods同名会以组件为主；',
            '有一些缺点，如变量来源不明，可能会造成命名冲突，可能会出现多对多的情况，复杂度较高；',
            'Vue3中使用compisition代替；'
        ]
    },
    {
        title: "this.$attrs和this.$listeners是什么？",
        answer: [
            '$attr包含了父组件中不作为props被识别的attributes的绑定，class和style除外，并且可以通过v-bind=’$attrs’传入内部组件；',
            '$listeners包含了父组件中不含.native的v-on事件监听器。它可以通过v-on=’$listeners’传递给子组件；'
        ]
    },
    {
        title: "请描述event loop机制",
        answerImg: [
            'https://wx1.sbimg.cn/2020/06/27/2Rdbd.png'
        ]
    },
    {
        title: "什么是宏任务和微任务，两者区别是什么？",
        answer: [
            '宏任务常见的有setTimeout，setIntrval，ajax，dom事件，requestAnimateFrame；',
            '微任务：Promise；',
            '宏任务由w3c规定，微任务由ecma规定；',
            '微任务在DOM渲染前执行，宏任务在DOM渲染之后执行；'
        ]
    },
    {
        title: "Promise都有哪些状态？",
        answer: [
            'peading、resolved、rejected；',
            'peading->resolved或peading->rejected，变化不可逆；',
            'resolve触发then回调，rejected触发catch回调；',
            'then中报错会触发catch，catch中没有报错会触发then；'
        ]
    },
    {
        title: "以下代码执行结果？",
        titleImg: [
            'https://wx2.sbimg.cn/2020/06/27/2RsJY.png',
            'https://wx1.sbimg.cn/2020/06/27/2RJiA.png',
            'https://wx1.sbimg.cn/2020/06/27/2Rj5V.png',
        ],
        answer: [
            '1,3 原因：resolve状态不出发catch回调',
            '1,2,3 原因：第一个then报错，所以执行第二个catch，执行过程中没有出问题所以状态是resolve，所以执行下一个then',
            '1,2 原因：第一个then报错，所以执行第二个catch，执行过程中没有出问题所以状态是resolve，所以不会执行catch'
        ]
    },
    {
        title: "以下代码执行结果？",
        titleImg: [
            'https://wx1.sbimg.cn/2020/06/27/2RuR7.png'
        ],
        answer: [
            'a = Promise对象，async函数执行永远返回的都是Promise，因为async会把里面的内容如果不是Promise的话会包装成Promise。',
            'b = 100，因为await相当于then。'
        ]
    },
    {
        title: "以下代码执行结果？",
        titleImg: [
            'https://wx1.sbimg.cn/2020/06/27/2Rt6e.png'
        ],
        answer: [
            'Start、a100、b200、error 300',
            '因为Promise,reject抛出了个异常，异常下面的代码都不执行，而且还没有用try...catch去捕获。'
        ]
    },
    {
        title: "以下代码执行结果？",
        titleImg: [
            'https://wx1.sbimg.cn/2020/06/27/2R1W6.png'
        ],
        answer: '100，400，300，200。微任务比宏任务先执行'
    },
    {
        title: "以下代码执行结果？",
        titleImg: [
            'https://wx1.sbimg.cn/2020/06/27/2RqyO.png'
        ],
        answer: [
            'script start',
            'async1 start',
            'Async2',
            'promise1',
            'script end',
            'async1 end',
            'promise2',
            'setTimeout'
        ]
    },
    {
        title: "常见的http状态码有哪些？",
        answer: [
            '1xx：服务端接到请求，还没开始返回；',
            '200：成功；',
            '3xx：重定向，301永久重定向、302临时重定向、304资源未修改（缓存）；',
            '4xx：客户端错误，400服务端不能理解客户端的请求、403权限不足、404资源未找到；',
            '5xx：服务端错误，500服务端错误，504网关超时。'
        ]
    },
    {
        title: "http常见的headers有哪些？",
        answer: [
            'Cache-control：缓存控制；',
            'Content-Type：数据类型；',
            'Content-length：数据大小（字节）；',
            'Host：请求的域名；',
            'cookie；',
            'Set-Cookie：服务端设置Cookie；',
            'Accept：浏览器可接受的数据格式；',
            'Accept-Encoding：浏览器可接受的加密算法，如gzip',
            'Accept-Languages：语言，如zh_CN；',
            ')Connection：keep-alive 建立一次TCP连接后可以重复使用',
            ')User-Agent：浏览器信息（UA）；',
            ')Last-Modified：服务端发给客户端的资源最后修改时间；',
            ')If-Modified-Since：客户端发给服务端的资源的Last-Modified；',
            ')Etag：服务端发给客户端的资源唯一标识，优先用Etag，因为Last-Modified只能精确到秒，并且可能时间修改但是资源未修改；',
            ')If-None-Match：客户端发给服务端的Etag；'
        ]
    },
    {
        title: "什么是Resful API？",
        answer: [
            'Resful API是一种新的接口规范，一个api代表一种资源，并且不建议使用url参数，如：/api/list/2；',
            '使用methods表示操作类型，get获取、post新增、patch局部更新，put替换更新、delete删除'
        ]
    },
    {
        title: "描述http缓存机制？",
        answerImg: [
            'https://wx1.sbimg.cn/2020/06/27/2Rh24.png'
        ]
    },
    {
        title: "为什么JS中0.1+0.2！==0.3？请解释原因并说出如何避免。",
        answer: '因为计算机进行计算时会将数字根据IEEE 754标准转换为2进制，而0.1和0.2转换为二进制的时候是无限循环的，而IEEE 754的浮点精度只能有53位，在这里做了一个末尾处四舍五入操作，此时精度已经丢失。避免这种操作可以进行小数点后若干位四舍五入操作。'
    },
    {
        title: '介绍一下什么是深度优先遍历，什么是广度优先遍历，如何实现？',
        answer: [
            '深度优先遍历是纵向遍历从上到下一直将一个节点的所有后代全部遍历一遍后在遍历兄弟节点，优点是占用空间小，但是性能不如广度优先;',
            '广度优先遍历是横向遍历，从左至右将一代遍历完后再进行下一代，占用空间稍微大点，但是性能好；'
        ],
        code: `// 深度优先
function dfs(tree) {
    let result = [];
    tree.forEach(item => {
        if (item.children && item.children.length) {
            result = result.concat(dfs(item.children))
        } else {
            result.push(item.name)
        }
    })
    return result
}

// 广度优先
function bfs(tree) {
    let result = [];
    let queue = [...tree];
    while (queue.length > 0) {
        queue.forEach(item => {
            result.push(item.name);
            item.children && queue.push(...item.children)
            queue.shift()
        })
    }
    return result
}`
    },
    {
        title: '已知如下数组：[ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10],编写一段程序将数组扁平化去重并以升序排列。',
        code: `let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
console.log([...new Set(arr.flat(Infinity).sort((a, b) => a - b))]);`
    },
    {
        title: '描述一下异步的发展历程及优缺点',
        answer: [
            '异步回调（回调地狱）；',
            'ES6引入Promise函数（不能被try...catch，链式调用未能解决回调地狱的问题）',
            'ES6中引入Generator函数（使用起来较复杂不易理解）；',
            'ES7新增async/await，使异步代码看起来像同步一样，而且可以被try...catch捕获异常；'
        ]
    },
    {
        title: 'Promise构造函数是同步还是异步代码？then函数呢？',
        answer: '构造函数是同步代码，then是异步代码'
    },
    {
        title: '什么是http，主要有哪些版本？',
        answer: [
            '(1)http（超文本传输协议），是一种基于TCP/IP通信协议的数据传输协议；',
            '(2)http具有以下特点：',
            '①灵活，可传输任意类型的数据，只需要通过content-type标记即可；',
            '②简单快速，客户端发起请求只需要地址和方法即可；',
            '③无连接，服务端每次连接只能处理一个请求，请求后关闭连接；',
            '④无状态，对请求处理没有记忆，如果需要之前的数据需要重新传输；',
            '(3)请求报文由请求行(方法，URL，协议/版本)，请求头，请求体构成，响应报文由状态行，响应头，响应主体构成',
            '(4)各版本区别：',
            '①0.9版本：只支持GET请求；没有请求头的概念；所以只能发送html字符串，服务端响应后立即关闭TCP连接；',
            '②1.0版本：新增POST等方法，新增请求头和响应头的概念，支持多种数据格式',
            '③1.1版本新增put，patch，delete等方法；新增长连接，通过设置Connection：keep-alive保持连接不断开；新增缓存控制Cache-contral（主流使用）。',
            '④2.0版本新增二进制分帧，多路复用，请求头压缩，服务端推送，但是由于主流浏览器只支持基于TLS的http2，也就是需要升级为https才行。'
        ]
    },
    {
        title: 'https有什么作用？与http的区别？http的请求过程以及优缺点？',
        answer: [
            '(1)建立安全通道，确认网站的真实性。',
            '(2)区别：',
            '(3)https相对于http增加了一层ssl协议；',
            '(4)https默认端口443，http默认80；',
            '(5)需要SSL证书（阿里云可以申请DV SSL免费版，不兼容低版本客户端，不支持多域名）；',
            '(6)优点：',
            '(7)SEO方面，谷歌明确表示使用https的站点排名更高；',
            '(8)可以认证用户和服务器，确保数据正确的发送到客户端和服务端；',
            '(9)https虽然不是绝对安全，但是增加了中间人攻击成本；',
            '(10)缺点：',
            '(11)SEO方面，百度表示不会主动爬取https的站点，但是近些年来态度有所改善；',
            '(12)需要花钱申请证书；',
            '(13)对服务端劫持，黑客攻击，拒绝服务器攻击几乎起不到作用；',
            '(14)SSL信用体系不完善，在有些国家可以控制根CA证书的情况下中间人攻击依然可用；',
            '(15)握手协议比较费时，对速度有些影响；'
        ]
    },
    {
        title: 'url输入到渲染的过程？',
        answer: [
            '(1)DNS解析：DNS解析实际上是一个递归查询的过程，如www.google.com,会依次向本地域名服务器、根域名服务器、.com服务器，google.com服务器查询，查询完成之后保存在本地DNS缓存中。',
            '(2)建立DNS连接（三次握手）：第一次握手，由客户端发起，说我准备向你发送数据，你准备接收吧。第二次握手，由服务端发送，说我准备好了，你发吧。第三次握手：那我准备发了，你准备好接受。这样做的目的是为了防止已经失效的请求报文发送至服务端导致错误。',
            '(3)发送http请求：浏览器会检查cache-control是否启用并在有效期，如果在就直接读本地缓存，失效就正常发送http请求。',
            '(4)服务端响应http请求,处理并返回响应数据：服务端会检查请求头是否带有If-Modified-Since和If-None-Method，如果资源未改变返回304由客户端自己去读缓存，资源改变则返回200、资源、Last-modified、Etag。',
            '(5)浏览器收到数据开始渲染界面：根据html生成DOMTree，根据css生成CSSOM，通过DOMTree和CSSOM生成render Tree，根据render tree渲染页面，执行过程中如果遇到script就暂停渲染等待script执行结束再继续渲染。',
            '关闭连接（四次挥手）：第一次挥手由客户端发起，说我请求报文发完了，准备关闭；第二次挥手由服务端发起，说我请求报文接受完了；第三次挥手由服务端发起，说我响应报文发完了，请求关闭连接；第四次挥手由客户端发起，说我响应报文接收完了，我准备关闭，你也关闭吧,服务端收到后立即关闭，客户端一段时间无响应后关闭'
        ]
    }
]

export default arr
