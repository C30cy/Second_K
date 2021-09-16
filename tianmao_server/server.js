const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const users = []
const shujus = [ {keyword:'牛奶',text:[{name:'特仑苏',price:70},{name:'伊利纯牛奶',price:40},{name:'经典',price:78}]},
                {keyword:'华为充电器',text:[{name:'华为充电器',price:50},{name:'原装充电器',price:60},{name:'适配华为充电器',price:30}]},
                {keyword:'小米充电宝',text:[{name:'小米充电宝/10000毫安',price:60},{name:'小米充电宝/20000毫安',price:120}]}
            ]

app.use((request,response,next)=>{
	console.log('有人请求服务器了');
	// console.log('请求来自于',request.get('Host'));
	// console.log('请求的地址',request.url);
	next()
})
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

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
app.post('/keyword',(request,response)=>{
    const keywords = request.body
    console.log(keywords)
    let shuju = shujus.find(item => item.keyword === keywords.keyword)
    console.log(shuju)
    if(shuju){
        response.send(shuju)
    }
})
app.post('/check',(request,response)=>{
    console.log(request.body)
    const data = request.body
    console.log(users)
    let user = users.find(item => item.name === data.name)
    if(user){
        console.log('注册失败')
        response.send({msg:"注册失败",data:''})
    }else{
        users.push(data)
        console.log('注册成功')
        response.send({msg:"注册成功",data:data})
    }
})
app.post('/login',(request,response)=>{
    console.log(request.body)
    const data = request.body
    console.log(users)
    let user = users.find(item => item.name === data.name && item.pwd === data.pwd)
    if(user){
        console.log('登录成功')
        response.send({msg:"登录成功",data:data})
    }else{
        console.log('账号或密码错误')
        response.send({msg:"登录失败",data:data})
    }
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