<template>
    <div class="messages" v-if="messages.length">
        <div v-for="msg in messages" :key="msg.id">{{msg.message}}</div>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messages: []
        }
    },
    mounted() {
        this.id = 0;
    },
    methods: {
        add(options) {
            let id = this.id++; // 这是每个弹层id号
            let layer = {...options, id};
            this.messages.push(layer);  // 每增加一个就往数组中存放一个

            // 过一定时间再清除弹层
            layer.timer = setTimeout(() => {
                this.remove(layer);
            }, options.duration);
        },
        remove(layer) {
            clearTimeout(layer);
            this.messages = this.messages.filter(msg => msg.id !== layer.id);
        }
    }
}
</script>