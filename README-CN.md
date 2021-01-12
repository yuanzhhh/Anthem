**🚨 NOTICE: Sorry, I haven't maintained this project for a long time, so this project is for reference and experiment only.**

## 介绍
Anthem 一款瀑布流项目，就像 Pinterest、huaban.com、faxianla.com</br>
Anthem 对于无限滚动下拉加载达到了高性能实践</br>
Anthem 名字的由来其实就是因为很喜欢 [圣歌（Anthem）](https://www.ea.com/games/anthem) 这款游戏</br>
主要的技术栈使用 [Redux](https://github.com/reactjs/redux) + [react-redux](https://github.com/reactjs/react-redux) + [styled-components](https://github.com/styled-components/styled-components) + [immutable.js](https://github.com/facebook/immutable-js)

## 开发额外说明
项目内含一个HTTP服务器[koa2](https://github.com/koajs/koa) 用于图片输出，所以直接启动它<b>需要node版本在8.x以上</b>，或者您可以自行使用babel、runkoa</br>
打包使用 [webpack3](https://github.com/webpack/webpack)，[react-hot-loader](https://github.com/gaearon/react-hot-loader)模块热更新

## Demo
![demo](https://github.com/yuanzhhh/resources/blob/master/anthem-dome.gif "demo_gif")
![demo](https://github.com/yuanzhhh/resources/blob/master/anthem-dome.png "demo_png")

## Anthem 瀑布流概念来自谷歌的这张gif，有兴趣可以看看
https://developers.google.com/web/updates/2016/07/infinite-scroller
![demo](https://github.com/yuanzhhh/resources/blob/master/anthem-principle.gif "principle")

## 使用方式
```
# clone
git clone https://github.com/yuanzhhh/Anthem.git

# 安装
cd Anthem && npm install

# 运行
npm run dev

# 生产
npm run build
```
