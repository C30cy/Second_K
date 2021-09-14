const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('有人请求服务器了');
	// console.log('请求来自于',request.get('Host'));
	// console.log('请求的地址',request.url);
	next()
})

app.get('/students',(request,response)=>{
	const students = [
		{ id: "001", word: "进口食品" ,iconfont:1,prolists:["牛奶","零食","饼干","方便面","粮油"]},
        { id: "002", word: "食品饮料" ,iconfont:2,prolists:["牛奶","坚果","饼干","方便面","粮油"]},
        { id: "003", word: "粮油副食" ,iconfont:3,prolists:["油","大米","调料","方便面","火腿肠"]},
        { id: "004", word: "美容洗护" ,iconfont:4,prolists:["洗发","沐浴","牙膏","洁面","卫生巾"]},
        { id: "005", word: "家居家电" ,iconfont:5,prolists:["毛巾","家电","玻璃杯","衣架","锅"]},
        { id: "006", word: "家庭清洁" ,iconfont:6,prolists:["纸","洗衣","洗洁精","垃圾袋","洁厕"]},
        { id: "007", word: "母婴用品" ,iconfont:7,prolists:["纸尿裤","奶粉","湿巾","洗护","玩具"]}
    ]
	response.send(students)
})
app.get('/carousels',(request,response)=>{
	const images= [
        {id:1,imgSrc:'require("../assets/carousel1.jpg")'},
        {id:2,imgSrc:'require("../assets/carousel2.jpg")'},
        {id:3,imgSrc:'require("../assets/carousel3.jpg")'},
        {id:4,imgSrc:'require("../assets/carousel4.jpg")'},
        {id:5,imgSrc:'require("../assets/carousel5.jpg")'},
        {id:6,imgSrc:'require("../assets/carousel6.jpg")'},
        ]
	response.send(images)
})

app.listen(5000,(err)=>{
	if(!err) console.log('服务器启动成功了，监听5000端口');
})