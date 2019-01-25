
import Vue from 'vue';

let Url = {
    serverUrl: 'http://api.blog.cn/api/',
    imageUrl: 'https://pic.ruibei365.com/',
    ThisUrl: 'http://h5dev.ruibei365.com/'
}

Vue.prototype.$Url = Url;

export default Url;
