<template>
    <li>
        <div class="title">
            <h4 v-text="data.title" />
            <!--附加图片-->
            <img
                v-for="item of data.titleImg"
                :key="item"
                :src="item"
                :alt="item">
        </div>
        <label>
            <textarea v-model="userAnswer" />
        </label>
        <p class="showAnswer">
            <button @click="showAnswer = !showAnswer">
                显示答案
            </button>
        </p>
        <div
            v-show="showAnswer"
            class="answer">
            <!--文字描述-->
            <p
                v-for="item of answer"
                :key="item"
                v-text="item" />
            <!--代码演示-->
            <pre v-if="data.code">
                <code
                        ref="code"
                        v-text="data.code" />
            </pre>
            <!--附加图片-->
            <img
                v-for="item of data.answerImg"
                :key="item"
                :src="item"
                :alt="item">
            <!--引用地址-->
            <a
                v-for="item of data.link"
                :key="item.title"
                :href="item.target"
                v-text="item.title" />
        </div>
    </li>
</template>

<script>

import Hljs from 'highlight.js/lib/core';

export default {
    name: "Topic",
    props: {
        data: {
            type: Object,
            default() {
                return {
                    title: "",
                    answer: "",
                    userAnswer: "",
                    image: []
                }
            }
        }
    },
    data() {
        return {
            showAnswer: false,
            userAnswer: ""
        }
    },
    computed: {
        answer() {
            if (!this.data.answer) {
                return []
            }
            if (Array.isArray(this.data.answer)) {
                return this.data.answer
            }
            return [this.data.answer]
        }
    },
    mounted() {
        if (this.$refs.code) {
            Hljs.highlightBlock(this.$refs.code)
        }
    }
}
</script>

<style lang="stylus" scoped>
    li {
        line-height 2em

        .title {
            font-size 16px
            margin-bottom 20px
        }

        textarea {
            padding 5px
            width 100%
            max-width 100%
            min-width 100%
            min-height 80px
            border-radius 4px
            border 1px solid #ccc
            transition border-color .2s

            &:focus {
                border-color #42b983
            }
        }

        .showAnswer {
            text-align right

            button {
                background-color: transparent
                border 0
                color #42b983
                margin 0 20px
                cursor pointer
            }
        }

        .answer {
            padding 10px
            border-radius 4px
            background-color: #efefef
        }
        a{
            color #42b983;
            text-decoration underline !important
        }

        img {
            max-width 100%
        }
    }
</style>