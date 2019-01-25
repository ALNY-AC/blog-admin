
export default {
    name: 'create',
    data() {
        return {
            form: {
                title: '',
                abstract: '',
                head_img: '',
                content: '',
                tags: '',
            },
            tag: '',
            config: {
                toolbarFloat: false,
            }
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
        },
        addTag() {
            this.form.tags.push(this.tag + '');
            this.tag = '';
        },
        // 用于更新一些数据
        update() { },
        create() {
            this.$http.post('paper/create', this.form).then(res => {
                if (res.res >= 0) {
                    this.$toast.success('添加成功！');
                    setTimeout(() => {
                        this.$router.replace(`/paper/info/info?id=${res.data}`);
                    }, 200);
                } else {
                    this.$toast.error('添加失败！');
                }
            })

        },
        onStop(s) {
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
        document.body.style.backgroundColor = "#f4f7ed";
        this.$nextTick(() => { });
    },
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
    beforeUpdate() { },
    // keep-alive 组件激活时调用。
    activated() { },
    // keep-alive 组件停用时调用。
    deactivated() { },
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy() {
        document.body.style.backgroundColor = "#ffffff";
    },
    //Vue 实例销毁后调用。
    destroyed() { },
    // 当捕获一个来自子孙组件的错误时被调用。
    errorCaptured() { },
    // 包含 Vue 实例可用指令的哈希表。
    directives: {},
    // 一个对象，键是需要观察的表达式，值是对应回调函数。
    watch: {},
    // 组件列表
    components: {},
};