var Goods= require("../app/models/goodsModel");
var fd=[ 
	{id:"fd001",number:890,typename:"food",name:"梅干菜扣肉薄酥饼30个独立包装正宗特产美食糕点小吃零食黄山烧饼",piclist:["/images/fd/fd001.jpg","/images/fd/fd001_1.jpg"],price:15.9,discount:0.8,comment:[199,23,4],describe:"【新鲜出炉 现做现卖 当天发货】 【每一个饼都有小袋独立包装，干净卫生又方便存放】【口感：香，酥，脆；好吃才是硬道理】【每袋125g10个装，新旧包装更换中】"},
	{id:"fd002",typename:"food",name:"扭扭虾条鱿鱼卷虾味条大包鲜虾片油炸膨化食品零食大礼包批发620g ",piclist:["/images/fd/fd002.jpg","/images/fd/fd002_1.jpg"],price:18.5,discount:1.0,comment:[239,23,4],describe:"年货休闲食品、小盆友也很喜欢哦1大份量虾味条鱿鱼卷、好吃！够味！"},
	{id:"fd003",typename:"food",name:"米饼500克整箱零食儿童饼干糙米卷休闲膨化食品米果",piclist:["/images/fd/fd003.jpg"],price:18.5,discount:1.0,comment:[239,23,4],describe:""},
	{id:"fd004",number:169,typename:"food",name:"手工酒酿米馒头饼 传统小吃糕点 发糕 米糕 水塔糕 500g",piclist:["/images/fd/fd004.jpg","/images/fd/fd004_1.jpg","/images/fd/fd004_2.jpg"],price:14.5,discount:1.0,comment:[1239,23,14],describe:"馒头采用当地新鲜大米发酵制成，自然地酒酿清香，口感柔韧又Q弹，酸甜适宜，又如海绵般柔软，蒸热后放凉一下！快来试试吧 米馒头如海棉般柔韧、棉花般洁白，醇甜适口，冷热均可食用，多食不伤肠胃"},
	{id:"fd005",number:489,typename:"food",name:"宁波特产传统手工现做糕点桂花糕米糕糯米糕零食小吃",piclist:["/images/fd/fd005.jpg","/images/fd/fd005_1.jpg","/images/fd/fd005_2.jpg"],price:15.7,discount:1.0,comment:[439,27,8],describe:"★ 手工制作 ★新鲜现做 老少皆宜 ★宁波特产传统手工现做点桂花米糕小吃250"},
	{id:"fd006",typename:"food",name:"天津麻花1000g 独立小包装 散装零食 天津特产酥脆麻花",piclist:["/images/fd/fd006.jpg","/images/fd/fd006_1.jpg","/images/fd/fd006_2.jpg"],price:18.2,discount:1.0,comment:[234,23,4],describe:"厂家直销 天津味道酥脆香甜 传统工艺 特色小吃 日期新鲜 天天特价"},
	{id:"fd007",number:587,typename:"food",name:"喵叔的实验室 巧克力爆浆手工曲奇熔岩蛋糕夹心饼干糕点点心",piclist:["/images/fd/fd007.jpg","/images/fd/fd007_1.jpg","/images/fd/fd007_2.jpg","/images/fd/fd007_3.jpg"],price:17.3,discount:0.7,comment:[531,31,41],describe:"喵叔的实验室长期爆款，这是一款源自伦敦西区的传统英式软曲奇配方，原料那必须是全进口的哦！单独袋装，颜值相当高！口感那也是必须棒，当亲们轻轻一咬，表皮软软糯糯的，里面巧克力温润细腻，常温状态下也保持润泽口感，冷藏起来口感更佳哦！我能叫巧克力控们立即行动起来么？？"},
	{id:"fd008",typename:"food",name:"40粒强效型酵素梅子小妖精随便果增强版时时青梅清净颜孝素果正品",piclist:["/images/fd/fd008.jpg","/images/fd/fd008_1.jpg"],price:48.1,discount:0.8,comment:[789,45,3],describe:""},
	{id:"fd009",number:678,typename:"food",name:"柿之恋正宗富平柿饼陕西特产农家自制特级吊饼500克",piclist:["/images/fd/fd009.jpg"],price:16.4,discount:1.0,comment:[535,23,4],describe:""},
	{id:"fd010",typename:"food",name:"天天特价香辣豆腐皮辣条零食散装麻辣豆皮小吃豆腐干湖南特产500g",piclist:["/images/fd/fd010.jpg","/images/fd/fd010_1.jpg","/images/fd/fd010_2.jpg","/images/fd/fd010_3.jpg"],price:28.5,discount:0.9,comment:[731,2,9],describe:""},
];
var datalist=[
//吃
	{id:"fd001",number:890,typename:"food",name:"梅干菜扣肉薄酥饼30个独立包装正宗特产美食糕点小吃零食黄山烧饼",piclist:["/images/fd/fd001.jpg","/images/fd/fd001_1.jpg"],price:15.9,discount:0.8,comment:[199,23,4],describe:"【新鲜出炉 现做现卖 当天发货】 【每一个饼都有小袋独立包装，干净卫生又方便存放】【口感：香，酥，脆；好吃才是硬道理】【每袋125g10个装，新旧包装更换中】"},
	{id:"fd002",typename:"food",name:"扭扭虾条鱿鱼卷虾味条大包鲜虾片油炸膨化食品零食大礼包批发620g ",piclist:["/images/fd/fd002.jpg","/images/fd/fd002_1.jpg"],price:18.5,discount:1.0,comment:[239,23,4],describe:"年货休闲食品、小盆友也很喜欢哦1大份量虾味条鱿鱼卷、好吃！够味！"},
	{id:"fd003",typename:"food",name:"米饼500克整箱零食儿童饼干糙米卷休闲膨化食品米果",piclist:["/images/fd/fd003.jpg"],price:18.5,discount:1.0,comment:[239,23,4],describe:""},
	{id:"fd004",number:169,typename:"food",name:"手工酒酿米馒头饼 传统小吃糕点 发糕 米糕 水塔糕 500g",piclist:["/images/fd/fd004.jpg","/images/fd/fd004_1.jpg","/images/fd/fd004_2.jpg"],price:14.5,discount:1.0,comment:[1239,23,14],describe:"馒头采用当地新鲜大米发酵制成，自然地酒酿清香，口感柔韧又Q弹，酸甜适宜，又如海绵般柔软，蒸热后放凉一下！快来试试吧 米馒头如海棉般柔韧、棉花般洁白，醇甜适口，冷热均可食用，多食不伤肠胃"},
	{id:"fd005",number:489,typename:"food",name:"宁波特产传统手工现做糕点桂花糕米糕糯米糕零食小吃",piclist:["/images/fd/fd005.jpg","/images/fd/fd005_1.jpg","/images/fd/fd005_2.jpg"],price:15.7,discount:1.0,comment:[439,27,8],describe:"★ 手工制作 ★新鲜现做 老少皆宜 ★宁波特产传统手工现做点桂花米糕小吃250"},
	{id:"fd006",typename:"food",name:"天津麻花1000g 独立小包装 散装零食 天津特产酥脆麻花",piclist:["/images/fd/fd006.jpg","/images/fd/fd006_1.jpg","/images/fd/fd006_2.jpg"],price:18.2,discount:1.0,comment:[234,23,4],describe:"厂家直销 天津味道酥脆香甜 传统工艺 特色小吃 日期新鲜 天天特价"},
	{id:"fd007",number:587,typename:"food",name:"喵叔的实验室 巧克力爆浆手工曲奇熔岩蛋糕夹心饼干糕点点心",piclist:["/images/fd/fd007.jpg","/images/fd/fd007_1.jpg","/images/fd/fd007_2.jpg","/images/fd/fd007_3.jpg"],price:17.3,discount:0.7,comment:[531,31,41],describe:"喵叔的实验室长期爆款，这是一款源自伦敦西区的传统英式软曲奇配方，原料那必须是全进口的哦！单独袋装，颜值相当高！口感那也是必须棒，当亲们轻轻一咬，表皮软软糯糯的，里面巧克力温润细腻，常温状态下也保持润泽口感，冷藏起来口感更佳哦！我能叫巧克力控们立即行动起来么？？"},
	{id:"fd008",typename:"food",name:"40粒强效型酵素梅子小妖精随便果增强版时时青梅清净颜孝素果正品",piclist:["/images/fd/fd008.jpg","/images/fd/fd008_1.jpg"],price:48.1,discount:0.8,comment:[789,45,3],describe:""},
	{id:"fd009",number:678,typename:"food",name:"柿之恋正宗富平柿饼陕西特产农家自制特级吊饼500克",piclist:["/images/fd/fd009.jpg"],price:16.4,discount:1.0,comment:[535,23,4],describe:""},
	{id:"fd010",typename:"food",name:"天天特价香辣豆腐皮辣条零食散装麻辣豆皮小吃豆腐干湖南特产500g",piclist:["/images/fd/fd010.jpg","/images/fd/fd010_1.jpg","/images/fd/fd010_2.jpg","/images/fd/fd010_3.jpg"],price:28.5,discount:0.9,comment:[731,2,9],describe:""},

//男鞋
	{id:"ms001",number:978,typename:"manshoes",name:"Belle/百丽2017黑色牛皮革男皮鞋21601AM7单鞋头层皮系带 黑色",piclist:["/images/ms/ms001.jpg","/images/ms/ms001_1.jpg","/images/ms/ms001_2.jpg"],price:328,discount:1,comment:[731,0,9],describe:"/images/ms/ms001d.jpg"},
	{id:"ms002",number:878,typename:"manshoes",name:"骆驼（CAMEL） 情侣款系带休闲跑步鞋徒步男鞋 A632303615 碳灰男款",piclist:["/images/ms/ms002.jpg","/images/ms/ms002_1.jpg","/images/ms/ms002_2.jpg"],price:269,discount:1,comment:[790,2,4],describe:"/images/ms/ms002d.jpg"},
	{id:"ms003",number:998,typename:"manshoes",name:"奥趣（AOQU）男鞋 男士休闲鞋 休闲皮鞋 运动透气网布鞋 韩版板鞋 鞋子男款 黑白色",piclist:["/images/ms/ms003.jpg","/images/ms/ms003_1.jpg","/images/ms/ms003_2.jpg","/images/ms/ms003_3.jpg"],price:129,discount:1,comment:[888,8,9],describe:"/images/ms/ms003d.jpg"},
	{id:"ms004",number:790,typename:"manshoes",name:"悍凯 男士休闲鞋 男鞋 韩版运动板鞋 鞋子男 黑蓝",piclist:["/images/ms/ms004.jpg","/images/ms/ms004_1.jpg","/images/ms/ms004_2.jpg"],price:99,discount:0.7,comment:[830,4,6],describe:"/images/ms/ms004d.jpg"},
	{id:"ms005",number:897,typename:"manshoes",name:"花花公子男鞋冬季休闲皮鞋真皮韩版潮流男士棉鞋保暖加绒休闲鞋子",piclist:["/images/ms/ms005.jpg","/images/ms/ms005_1.jpg","/images/ms/ms005_2.jpg"],price:258,discount:1,comment:[831,2,9],describe:"/images/ms/ms005d.jpg"},
	{id:"ms006",number:908,typename:"manshoes",name:"红蜻蜓 牛皮舒适套脚休闲男鞋皮鞋 WTA55901/02/03/05 黑色",piclist:["/images/ms/ms006.jpg","/images/ms/ms006_1.jpg"],price:179,discount:0.87,comment:[981,7,5],describe:"/images/ms/ms006d.jpg"},
	{id:"ms007",number:889,typename:"manshoes",name:"卡帝乐鳄鱼 男鞋休闲鞋秋冬季新款运动鞋子男潮流户外板鞋 深蓝",piclist:["/images/ms/ms007.jpg","/images/ms/ms007_1.jpg","/images/ms/ms007_2.jpg","/images/ms/ms007_3.jpg"],price:139,discount:0.9,comment:[933,2,9],describe:"/images/ms/ms007d.jpg"},
	{id:"ms008",number:789,typename:"manshoes",name:" Belle/百丽2017新款秋季时尚运动风舒适男休闲鞋33502CM7 黑色",piclist:["/images/ms/ms008.jpg","/images/ms/ms008_1.jpg","/images/ms/ms008_2.jpg"],price:338,discount:0.89,comment:[891,5,7],describe:"/images/ms/ms008d.jpg"},
	{id:"ms009",number:567,typename:"manshoes",name:"L'ALPINA休闲鞋男鞋秋冬新款真皮板鞋英伦男士潮鞋子 黑色",piclist:["/images/ms/ms009.jpg","/images/ms/ms009_1.jpg","/images/ms/ms009_2.jpg","/images/ms/ms009_3.jpg"],price:288,discount:1,comment:[831,2,9],describe:"/images/ms/ms009d.jpg"},
	{id:"ms010",number:456,typename:"manshoes",name:"ECCO爱步男鞋2017秋冬新款高帮休闲鞋时尚简约系带男鞋431524专柜正品海外直邮 431524-51052-P",piclist:["/images/ms/ms010.jpg","/images/ms/ms010_1.jpg","/images/ms/ms010_2.jpg","/images/ms/ms010_3.jpg"],price:1389,discount:1,comment:[631,2,8],describe:"/images/ms/ms010d.jpg"},

//女鞋
	{id:"ws001",number:568,typename:"wemanshoes",name:"UGG 新款女士单鞋经典休闲平底高帮豆豆鞋开车鞋 1016304 LKRD",piclist:["/images/ws/ws001.jpg","/images/ws/ws001_1.jpg","/images/ws/ws001_2.jpg","/images/ws/ws001_3.jpg"],price:600,discount:1,comment:[789,16,8],describe:"/images/ws/ws001d.jpg"},
	{id:"ws002",number:567,typename:"wemanshoes",name:"奥康女鞋真皮2017春秋新款休闲百搭单鞋女妈妈鞋 黑色",piclist:["/images/ws/ws002.jpg","/images/ws/ws002_1.jpg"],price:159,discount:0.8,comment:[324,16,8],describe:"/images/ws/ws002d.jpg"},
	{id:"ws003",number:897,typename:"wemanshoes",name:"骆驼牌 女鞋 2017冬季款 简约绒面短靴 韩版百搭短筒靴 灰色",piclist:["/images/ws/ws003.jpg","/images/ws/ws003_1.jpg","/images/ws/ws003_2.jpg","/images/ws/ws003_3.jpg"],price:269,discount:1,comment:[951,17,8],describe:"/images/ws/ws003d.jpg"},
	{id:"ws004",number:467,typename:"wemanshoes",name:"莱尔斯丹 2017秋季新款细跟高跟鞋职业通勤套脚女鞋尖头中跟单鞋OUSE 8T65001 深粉绒面 DNS",piclist:["/images/ws/ws004.jpg","/images/ws/ws004_1.jpg","/images/ws/ws004_2.jpg","/images/ws/ws004_3.jpg"],price:459,discount:1,comment:[976,14,18],describe:"/images/ws/ws004d.jpg"},
	{id:"ws005",number:245,typename:"wemanshoes",name:"美年达女鞋休闲鞋女新款韩版加绒棉鞋女潮流EVA底轻便耐磨学生鞋 女款黑色加绒棉鞋（偏小一码）",piclist:["/images/ws/ws005.jpg","/images/ws/ws005_1.jpg","/images/ws/ws005_2.jpg","/images/ws/ws005_3.jpg"],price:128,discount:0.9,comment:[551,16,28],describe:"/images/ws/ws005d.jpg"},
	{id:"ws006",number:345,typename:"wemanshoes",name:"星期六（ST&SAT） 2017年专柜同款绒面羊皮革尖头水钻高跟单鞋SS71111212 黑色",piclist:["/images/ws/ws006.jpg","/images/ws/ws006_1.jpg","/images/ws/ws006_2.jpg","/images/ws/ws006_3.jpg"],price:399,discount:0.8,comment:[999,11,9],describe:"/images/ws/ws006d.jpg"},
	{id:"ws007",number:345,typename:"wemanshoes",name:"远姿情2017秋季新款女鞋时尚高帮小白鞋内增高单鞋休闲鞋女 黑色",piclist:["/images/ws/ws007.jpg","/images/ws/ws007_1.jpg","/images/ws/ws007_2.jpg","/images/ws/ws007_3.jpg"],price:98,discount:1,comment:[879,16,10],describe:"/images/ws/ws007d.jpg"},
	{id:"ws008",number:346,typename:"wemanshoes",name:"万匠 韩版2017秋季新品白搭运动女鞋系带时尚学生鞋女士舒适厚底鞋子 A1751-1 黑色A1751-1",piclist:["/images/ws/ws008.jpg","/images/ws/ws008_1.jpg","/images/ws/ws008_2.jpg","/images/ws/ws008_3.jpg"],price:128,discount:1,comment:[456,32,8],describe:"/images/ws/ws008d.jpg"},
	{id:"ws009",number:643,typename:"wemanshoes",name:"慕安娜休闲鞋女2017新款白百搭时尚厚底内增高小鞋子 绿色-加绒",piclist:["/images/ws/ws009.jpg","/images/ws/ws009_1.jpg","/images/ws/ws009_2.jpg","/images/ws/ws009_3.jpg"],price:199,discount:0.79,comment:[450,79,8],describe:"/images/ws/ws009d.jpg"},
	{id:"ws010",number:346,typename:"wemanshoes",name:"香阁儿粗跟短靴女冬季欧美时尚别致方头舒适低跟女鞋 灰+白色",piclist:["/images/ws/ws010.jpg","/images/ws/ws010_1.jpg","/images/ws/ws010_2.jpg","/images/ws/ws010_3.jpg"],price:638,discount:1,comment:[978,1,13],describe:"/images/ws/ws010d.jpg"},

//男装
	{id:"mc001",number:354,typename:"manclose",name:"花花公子夹克男外套2017秋季新款商务休闲修身男士加厚加绒夹克棒球衫加棉保暖男士上衣 黑色",piclist:["/images/mc/mc001.jpg","/images/mc/mc001_1.jpg","/images/mc/mc001_2.jpg"],price:198,discount:0.8,comment:[986,9,16],describe:"/images/mc/mc001d.jpg"},
	{id:"mc002",number:234,typename:"manclose",name:"HTLB 男装夹克男2017秋季新款男士外套 青年中年简约立领修身薄短外套衣服 深蓝",piclist:["/images/mc/mc002.jpg","/images/mc/mc002_1.jpg","/images/mc/mc002_2.jpg"],price:138,discount:1,comment:[981,10,6],describe:"/images/mc/mc002d.jpg"},
	{id:"mc003",number:786,typename:"manclose",name:"稻草人品牌夹克男2017秋季新款V领男土薄款开衫精品男装拉链休闲外套夹克衫 DYT31225黑色",piclist:["/images/mc/mc003.jpg","/images/mc/mc003_1.jpg","/images/mc/mc003_2.jpg","/images/mc/mc003_3.jpg"],price:228,discount:1,comment:[780,16,9],describe:"/images/mc/mc003d.jpg"},
	{id:"mc004",number:56,typename:"manclose",name:"HLA海澜之家时尚碎花夹克2017秋季新品棒球领夹克男HWJAD3V211A 藏青花纹L1 藏青花纹",piclist:["/images/mc/mc004.jpg","/images/mc/mc004_1.jpg","/images/mc/mc004_2.jpg","/images/mc/mc004_3.jpg"],price:358,discount:1,comment:[885,23,10],describe:"/images/mc/mc004d.jpg"},
	{id:"mc005",number:574,typename:"manclose",name:"卡骆旗夹克男2017新款大码男士外套立领防风型男上衣夹克男装 深蓝色",piclist:["/images/mc/mc005.jpg","/images/mc/mc005_1.jpg","/images/mc/mc005_2.jpg","/images/mc/mc005_3.jpg"],price:108,discount:0.9,comment:[886,10,6],describe:"/images/mc/mc005d.jpg"},
	{id:"mc006",number:685,typename:"manclose",name:"战地吉普夹克男外套青年男士立领商务休闲卫衣男纯棉开衫外套运动卫衣2017秋冬新款 W1501宝蓝色",piclist:["/images/mc/mc006.jpg","/images/mc/mc006_1.jpg","/images/mc/mc006_2.jpg","/images/mc/mc006_3.jpg"],price:168,discount:0.99,comment:[799,18,6],describe:"/images/mc/mc006d.jpg"},
	{id:"mc007",number:567,typename:"manclose",name:"劲霸男装K-Boxing O2O专柜同款 羊绒混纺短版毛呢茄克|BDWV3115 驼色 ",piclist:["/images/mc/mc007.jpg","/images/mc/mc007_1.jpg","/images/mc/mc007_2.jpg","/images/mc/mc007_3.jpg"],price:2580,discount:1,comment:[796,78,7],describe:"/images/mc/mc007d.jpg"},
	{id:"mc008",number:655,typename:"manclose",name:"西域骆驼夹克男2017秋冬季新款外套男士休闲薄款夹克衫男 上衣男装 宝蓝",piclist:["/images/mc/mc008.jpg","/images/mc/mc008_1.jpg","/images/mc/mc008_2.jpg","/images/mc/mc008_3.jpg"],price:148,discount:0.96,comment:[906,10,6],describe:"/images/mc/mc008d.jpg"},
	{id:"mc009",number:896,typename:"manclose",name:"南极人夹克男2017秋冬季新款皮衣男外套男士休闲薄款夹克衫男 上衣男装 黑色",piclist:["/images/mc/mc009.jpg","/images/mc/mc009_1.jpg","/images/mc/mc009_2.jpg","/images/mc/mc009_3.jpg"],price:128,discount:0.98,comment:[568,23,8],describe:"/images/mc/mc009d.jpg"},
	{id:"mc010",number:465,typename:"manclose",name:"花花公子贵宾 2017秋冬款加绒加厚商务休闲长袖保暖衬衫男士修身衬衣 B2393 酒红加绒",piclist:["/images/mc/mc010.jpg","/images/mc/mc010_1.jpg","/images/mc/mc010_2.jpg","/images/mc/mc010_3.jpg"],price:139,discount:1,comment:[908,10,6],describe:"/images/mc/mc010d.jpg"},

//女装
	{id:"wc001",number:345,typename:"wemanclose",name:"槿炫长袖连衣裙女2017秋装新款女装时尚套装裙两件套 藏青套装",piclist:["/images/wc/wc001.jpg","/images/wc/wc001_1.jpg","/images/wc/wc001_2.jpg"],price:149,discount:0.92,comment:[576,16,5],describe:"/images/wc/wc001d.jpg"},
	{id:"wc002",number:677,typename:"wemanclose",name:"茵曼 2017秋装新款简约净色连帽百搭开衫外套女 卡其色",piclist:["/images/wc/wc002.jpg","/images/wc/wc002_1.jpg","/images/wc/wc002_2.jpg","/images/wc/wc002_3.jpg"],price:359,discount:0.8,comment:[976,18,5],describe:"/images/wc/wc002d.jpg"},
	{id:"wc003",number:123,typename:"wemanclose",name:"雅凡黛连衣裙秋冬装女新品韩版2017宽松显瘦毛衣外套两件套装长袖连衣裙针织中长款 米色",piclist:["/images/wc/wc003.jpg","/images/wc/wc003_1.jpg","/images/wc/wc003_2.jpg","/images/wc/wc003_3.jpg"],price:158,discount:0.9,comment:[976,16,5],describe:"/images/wc/wc003d.jpg"},
	{id:"wc004",number:345,typename:"wemanclose",name:"烟花烫秋装新款女装一字领修身百搭针织衫上衣 碧草 粉色",piclist:["/images/wc/wc004.jpg","/images/wc/wc004_1.jpg","/images/wc/wc004_2.jpg","/images/wc/wc004_3.jpg"],price:78,discount:0.9,comment:[576,6,5],describe:"/images/wc/wc004d.jpg"},
	{id:"wc005",number:234,typename:"wemanclose",name:"欧资2017针织衫套头连衣裙秋冬新款女装时尚修身显瘦长袖休闲毛衣加厚两件套套裙 米驼",piclist:["/images/wc/wc005.jpg","/images/wc/wc005_1.jpg","/images/wc/wc005_2.jpg","/images/wc/wc005_3.jpg"],price:155,discount:1,comment:[578,16,3],describe:"/images/wc/wc005d.jpg"},
	{id:"wc006",number:467,typename:"wemanclose",name:"UR青春女装秋冬新款时尚V领长袖显瘦针织T恤YV38R9BN2000 漂白",piclist:["/images/wc/wc006.jpg","/images/wc/wc006_1.jpg","/images/wc/wc006_2.jpg","/images/wc/wc006_3.jpg"],price:299,discount:1,comment:[479,5,5],describe:"/images/wc/wc006d.jpg"},
	{id:"wc007",number:354,typename:"wemanclose",name:"宿图 毛呢连衣裙秋冬新款2017韩版女装新款无袖背心裙打底裙 咖啡色格子+黑毛衣 两件套",piclist:["/images/wc/wc007.jpg","/images/wc/wc007_1.jpg","/images/wc/wc007_2.jpg","/images/wc/wc007_3.jpg"],price:179,discount:1,comment:[998,16,15],describe:"/images/wc/wc007d.jpg"},
	{id:"wc008",number:785,typename:"wemanclose",name:"槿炫连衣裙2017秋装新款女装韩版气质时尚套装裙 焦糖色套装",piclist:["/images/wc/wc008.jpg","/images/wc/wc008_1.jpg","/images/wc/wc008_2.jpg"],price:136,discount:0.98,comment:[466,16,0],describe:"/images/wc/wc008d.jpg"},
	{id:"wc009",number:356,typename:"wemanclose",name:"纽斐 连衣裙长袖2017秋冬新款韩版修身毛衣针织打底连衣裙秋Q895 军绿色",piclist:["/images/wc/wc009.jpg","/images/wc/wc009_1.jpg","/images/wc/wc009_2.jpg"],price:138,discount:1,comment:[789,16,5],describe:"/images/wc/wc009d.jpg"},
	{id:"wc010",number:356,typename:"wemanclose",name:"颜域品牌女装2017秋冬新款纯色堆堆领蕾丝镂空打底衫长袖修身上衣50W7057 白色",piclist:["/images/wc/wc010.jpg","/images/wc/wc010_1.jpg","/images/wc/wc010_2.jpg","/images/wc/wc010_3.jpg"],price:239,discount:1,comment:[908,16,0],describe:"/images/wc/wc010d.jpg"},


];


exports.importGoods=function(res){
	for(var i=0;i<datalist.length;i++){
		var go =new Goods(datalist[i]);
		go.save(function(err,d){
			if(err) res.end(err);
			
		});
	}
	res.end("ok");
}

/*exports.importfd=function(){
	for(var i=0;i<fd.length;i++){
		var go =new Goods(fd[i]);
		go.save();
	}
}
exports.importOthers=function(res){
	for(var i=0;i<others.length;i++){
		var go =new Goods(others[i]);
		go.save(function(err,d){
			if(err) res.end(err);
			
		});
	}
	res.end("ok");
}*/
