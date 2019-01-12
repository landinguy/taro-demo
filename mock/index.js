const delay = require('mocker-api/utils/delay');
const mockjs=require('mockjs');
const data= {
	'GET /api/succ':{
		status:'ok',
		data:{

		}
	},
	'GET /api/error':{
		status:'!ok',
		error:{
			message:"tester",
			code:"4001"
		}
	},
	'GET /api/loadAdv':{
		status:'ok',
		data:[
			{
				id:1,
				img:'/images/adv/1.jpg',
				txt:'广告1'
			},
			{
				id:2,
				img:'/images/adv/2.jpg',
				txt:'广告2'
			},
			{
				id:3,
				img:'/images/adv/1.jpg',
				txt:'广告3'
			},
			{
				id:4,
				img:'/images/adv/2.jpg',
				txt:'广告4'
			},
		]
	},
	'GET /api/logout':{
		status:'ok',
		error:{
			message:"tester",
			code:"4001"
		}
	},
	'GET /api/login': (req,res)=>{
		if (req.query['name']!=req.query['pass'])
			res.json({
				status:'failure',
				error:{
					message:'用户名密码不正确',
					code:'1001'
				}
			})
		else
			res.json({
				status: 'ok',
				data: {
					userInfo:{
						id:123,
						name:req.query["name"],
						phone:'18601727666',
						email:'tengyong@baido.com'
					},
					perm:['one','two'],
					shopList:[
						{
							info:{
								id:1234,
								name:'吃饭皇帝大',
								addr:'宝地广场',
							},
							devices:[
								{
									id:123,
									count:1,
									status:'ok'
								},
							],
							products:{
								total:{
									used:123,
									available:456,
									expired:'2019/12/12',
								},
								list:[
									{
										id:123,
										status:'ok',
										name:'test1',
										type:'main',
										expired:'2019/12/12',
									},{
										id:123,
										status:'ok',
										name:'test2',
										type:'sub',
										expired:'2019/12/12',
									},
								],
							}
						},
					],
				},
			})
	},		
	'GET /api/hi':(req,res)=>{
		res.json(
            {
                id:1,
                //query 方法获取Get参数,如 /api/hi?name=tony
                username:req.query["name"],
            }
        )
    },
    //可以直接使用mockjs生成mock数据
	'GET /api/mock':mockjs.mock({
		'list|10-100':1,
	})
}
//使用delay方法可以延迟返回数据
module.exports=delay(data,5000);
