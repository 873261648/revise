<template>
    <li>
        <h4 class="title" v-text="data.title"></h4>
        <label>
            <textarea v-model="data.userAnswer"></textarea>
        </label>
        <p class="showAnswer">
            <button @click="showAnswer = !showAnswer">显示答案</button>
        </p>
        <div class="answer" v-show="showAnswer">
            <p v-for="item of answer" :key="item" v-text="item"></p>
        </div>
    </li>
</template>

<script>
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
                showAnswer: false
            }
        },
        computed: {
            answer() {
                if (Array.isArray(this.data.answer)) {
                    return this.data.answer
                }
                return [this.data.answer]
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
            &:focus{
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
    }
</style>