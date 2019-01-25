export default {
    name: 'OEditor',
    props: {
        placeholder: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
        config: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {
            id: this.$getNonceStr(10),
            simditor: null,
            stopEventSetTimeout: null,
            simditorValue: ''
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {


            let config = {
                textarea: document.getElementById(`editor_${this.id}`),
                toolbar: [
                    'title',
                    'bold',
                    'italic',
                    'underline',
                    'strikethrough',
                    'fontScale',
                    'color',
                    'ol',            // ordered list,
                    'ul',           // unordered list,
                    'blockquote',
                    'code',      // code block,
                    'table',
                    'link',
                    'image',
                    'hr',         // horizontal ruler,
                    'indent',
                    'outdent',
                    'alignment',
                ],
            };

            for (const x in this.config) {
                config[x] = this.config[x];
            }



            this.simditor = new Simditor(config);

            this.simditor.on('valuechanged', (e, src) => {
                let value = this.simditor.getValue();
                this.simditorValue = value;
                this.$emit('input', value);
                this.stopEvent();
            });
            this.simditor.setValue(this.value);
        },
        // 用于更新一些数据
        update() { },
        stopEvent() {
            clearTimeout(this.stopEventSetTimeout);
            this.stopEventSetTimeout = setTimeout(() => {
                this.$emit('on-stop', this.simditorValue);
            }, 500);
        }
    },
    // 计算属性
    computed: {},
    // 包含 Vue 实例可用过滤器的哈希表。
    filters: {},
    // 在实例创建完成后被立即调用
    created() { },
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount() { },
    // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
    mounted() {
        this.init();
        this.$nextTick(() => { });
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
    beforeUpdate() { },
    // keep-alive 组件激活时调用。
    activated() { },
    // keep-alive 组件停用时调用。
    deactivated() { },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy() { },
    //Vue 实例销毁后调用。
    destroyed() { },
    // 当捕获一个来自子孙组件的错误时被调用。
    errorCaptured() { },
    // 包含 Vue 实例可用指令的哈希表。
    directives: {},
    // 一个对象，键是需要观察的表达式，值是对应回调函数。
    watch: {
        value(v) {
            if (v != this.simditorValue) {
                this.simditor.setValue(v);
            }
        },

    },
    // 组件列表
    components: {},
};