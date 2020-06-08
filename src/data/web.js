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
    }
]

export default arr