<template>
    <div class="content">
        <div class="content-left">
            <div v-for="(item, index) in options" :key="index">
                <div class="label" @click="select(item)">{{item.label}}</div>
            </div>
        </div>
        <div class="content-right" v-if="list && list.length">
            <cascader-item :options="list" :level="level+1" :value="value" @change="change"></cascader-item>
        </div>
    </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';

export default {
    name: 'cascaderItem',   // 必须要给当前组件起个名
    props: {
        options: {
            type: Array,
            default: () => []
        },
        value: {
            type: Array,
            default: () => []
        },
        level: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            current: null
        }
    },
    computed: {
        list() {
            // 如果options变化了，没有更新视图，因为没有依赖options
            // 去自己的那一层找自己的儿子
            if (this.value[this.level] && this.value[this.level].id) {
                let obj = this.options.find(item => item.id === this.value[this.level].id);
                return obj.children;
            }
            // 点击左边 算出右边
			// return this.value[this.level] && this.value[this.level].children;
        }
    },
    methods: {
        select(item) {
			this.current = item;	// 把当前左边选中的这一项存起来
            // 需要把数据拷贝一份 把数据改好提交给父亲
            let cloneValue = cloneDeep(this.value);
            cloneValue[this.level] = item;
            cloneValue.splice(this.level + 1);  // 当前点击的那一项，就把这之后的所有项都删掉
            this.$emit('change', cloneValue);
        },
        change(item) {
            this.$emit('change', item);
        }
    }
}
</script>