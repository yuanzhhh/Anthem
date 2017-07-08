const getImg = require('../module/getImg');
const router = require('koa-router')();
const sizeOf = require('image-size');
const path = require('path');


const numGetImgList = (imglist, newlist, usergetnum) => {

  if (newlist.length == usergetnum) {
    return newlist;
  }
  
  var num = Math.floor(Math.random() * imglist.length);

  let newimg = imglist[num] ? imglist[num] : numGetImgList(imglist, newlist, usergetnum);
  //获取图片宽高
  let dimensions = sizeOf(path.join(__dirname,'..','public',newimg));

  newlist.push({
    src: newimg,
    width: dimensions.width,
    height: dimensions.height
  });

  return numGetImgList(imglist, newlist, usergetnum);

}



router.get('/', async(ctx, next) => {
  //请求数量
  let usergetnum = ctx.query.num;
  //所有图片
  let imglist = await getImg();

  //根据请求数 返回随机图片路径
  let newlist = numGetImgList(imglist, [], usergetnum);

  ctx.body = newlist;
});

module.exports = router
