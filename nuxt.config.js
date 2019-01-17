module.exports = {
    router: {
        middleware: 'auth'
    },
    mode: 'spa',
    srcDir: 'src/',
    build: {
        babel: {

        }
    },
    css: [
        '@/styles/styles.scss',
    ],
    build: {
    },
    plugins: [
        '~/plugins/main.js',
    ],
    server: {
        port: 80,
        host: 'admin.blog.cn',
        // default: 80
        // default: localhost
    },
}   