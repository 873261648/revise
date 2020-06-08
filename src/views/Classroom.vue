<template>
    <div id="class_room">
        <h2
            class="title"
            v-text="title" />
        <ul class="items">
            <topic
                v-for="item of problems"
                :key="item.title"
                :data="item" />
        </ul>
    </div>
</template>

<script>
import testBank from '../data/web.js'
import Topic from "../components/Topic";

export default {
    name: "Classroom",
    components: {Topic},
    computed: {
        title() {
            let option = new Map([
                ['all', '逐题学习'],
                ['10', '仿真面试（10题）'],
                ['20', '仿真面试（20题）']
            ])
            return option.get(this.$route.query.type || 'all')
        },
        problems() {
            return this.randomProblem(this.$route.query.type)
        }
    },
    methods: {
        randomProblem(type) {
            if (type === 'all') {
                return testBank
            }
            let max = testBank.length;
            let num = type === '20' ? 20 : 10;
            num = num > max ? max : num;
            let items = [];
            let usedSub = [];
            while (items.length < num) {
                let sub = Math.floor(Math.random() * max);
                if (!usedSub.includes(sub)) {
                    usedSub.push(sub);
                    items.push(testBank[sub]);
                }
            }
            return items
        }
    }
}
</script>

<style lang="stylus" scoped>
    #class_room {
        max-width 1000px
        width 100%
        margin 0 auto
        padding 20px 10px

        .title {
            text-align center
            font-weight 400
            margin-bottom 20px
        }
    }
</style>