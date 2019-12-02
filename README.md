# NVA 由 nuxt.js 和 vue.js 为依赖，vue-element-admin 为基础的后台SPA

1. [Nuxt.js v.2.10.2](https://github.com/nuxt/nuxt.js/releases/tag/v2.10.2)
2. [vue-element-admin v3.9.3](https://github.com/PanJiaChen/vue-element-admin/releases/tag/v3.9.3)

## 运行

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:9091
$ yarn run dev
```

## 认证

1. 默认用户认证基于**JWT-TOKEN**，想要更改方式就得改代码
2. 登录入口应该有自己的验证码来做校验，NVA自带没有提供
3. 页面访问权限需要定义用户的 roles，默认是读取`user.roles`这个数组，可阅读以下代码：
    1. `~/mixins/sidebar.js`
    2. `~/middleware/auth.js`
    3. `~/mixins/hasRole.js`
4. 关于用户登录与权限校验，肯定得自己配置，无法开箱即用，但项目中已经有了解决的思路，稍微修改即可
5. 新建路由请参考`nuxt.js`的文档，并且必须在**sidebar.js**里为路由配置**icon**和**title**后才能正常使用
6. `vue-element-admin`的代码在`vendor`目录下，根据情况使用，使用方法参考其文档

## 授权
**MIT**
