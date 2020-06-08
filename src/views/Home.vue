<template>
    <div id="home">
        <img
            src="../assets/img/logo.png"
            alt="">
        <h2 class="title">
            请选择复习模式
        </h2>
        <p class="option">
            <button @click="enterRoom('all')">
                逐题学习
            </button>
            <button @click="enterRoom('10')">
                仿真面试（10题）
            </button>
            <button @click="enterRoom('20')">
                仿真面试（20题）
            </button>
        </p>
        <label>
            <span>选择题库：</span>
            <select v-model="testBank">
                <option value="web">web前端</option>
                <option value="java">java开发</option>
            </select>
        </label>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            testBank: 'web'
        }
    },
    methods: {
        enterRoom(type) {
            this.$router.push({
                name: "Classroom", query: {type}
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    #home {
        text-align center
        padding-top 20px

        img {
            display block
            width 200px
            margin 0 auto 20px
        }

        .title {
            font-weight 400
            margin-bottom 20px
        }

        .option {
            display flex
            justify-content center
            margin-bottom 20px

            button {
                background-color: transparent
                border 0
                color #42b983
                cursor pointer
            }
        }

    }
</style>