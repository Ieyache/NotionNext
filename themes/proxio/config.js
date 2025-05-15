/**
 * 另一个落地页主题
 */
const CONFIG = {
    PROXIO_WELCOME_COVER_ENABLE: false, //是否显示页面进入的欢迎文字
    PROXIO_WELCOME_TEXT: '欢迎来到此网站，点击任意位置进入', // 欢迎文字，留空则不启用

    // 英雄区块导航
    PROXIO_HERO_ENABLE: true, // 开启英雄区
    PROXIO_HERO_TITLE_1: '我们专注于宠物与人的共生空间设计', // 英雄区文字
    PROXIO_HERO_TITLE_2: '让陪伴不再局限于角落，而真正融入家的每一处动线', // 英雄区文字
    // 英雄区两个按钮，如果TEXT留空则隐藏按钮
    PROXIO_HERO_BUTTON_1_TEXT: '', // 英雄区按钮
    PROXIO_HERO_BUTTON_1_URL:
        'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_TEXT: '在Github上关注', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

    // 英雄区配图，如需隐藏，改为空值即可 ''
    PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
    PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/


    // 文章区块
    PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
    PROXIO_BLOG_TITLE: '作品',
    PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
    PROXIO_BLOG_TEXT_1: '',

    // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',


    PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

    // 特性区块
    PROXIO_FEATURE_ENABLE: false, // 特性区块开关
    PROXIO_FEATURE_TITLE: '为什么选我',
    PROXIO_FEATURE_TEXT_1: '我能让您的项目焕发光彩',
    PROXIO_FEATURE_TEXT_2:
        '丰富的案例经验，专业的技术服务，优质的沟通效率',

    // 特性1
    PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
    PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
    PROXIO_FEATURE_1_TITLE_1: '高效工作流程',
    PROXIO_FEATURE_1_TEXT_1: '精简的设计流程确保快速交付，在紧迫的工期下仍能保证品质与细节不打折扣。',

    PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
    PROXIO_FEATURE_2_ICON_IMG_URL: '', 
    PROXIO_FEATURE_2_TITLE_1: '协作式流程',
    PROXIO_FEATURE_2_TEXT_1: '与你紧密合作，融合反馈意见，打造超越预期的设计',

    PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
    PROXIO_FEATURE_2_ICON_IMG_URL: '',
    PROXIO_FEATURE_3_TITLE_1: '细节把控',
    PROXIO_FEATURE_3_TEXT_1: '精益求精雕琢每个元素，确保成品精致统一，令人过目难忘',

    PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
    PROXIO_FEATURE_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 按钮跳转

    // 首页生涯区块
    PROXIO_CAREER_ENABLE: false, // 区块开关
    PROXIO_CAREER_TITLE: '生涯',
    PROXIO_CAREER_TEXT:
        '以下是我的职业生涯',

    // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
    PROXIO_CAREERS: [
        { title: 'Freelance Architect', bio: '2016-2020', text: 'As a freelance architect, I worked on a range of residential and commercial projects, balancing form and function. I collaborated with clients and contractors to transform concepts into reality, ensuring each design was both aesthetically pleasing and structurally sound.' },
        { title: 'Product Designer at Spotify', bio: '2020-2022', text: 'At Spotify, I helped shape innovative features for millions of users globally. My focus was on creating seamless music discovery experiences, enhancing user interfaces, and optimizing cross-platform navigation, which led to an improved product flow and increased user satisfaction.' },
        { title: 'Freelance Product Designer', bio: '2022-Now', text: 'Now I design user-centric products that align with client visions. As a freelance product designer, I collaborate with startups and established companies, crafting solutions that elevate user experiences and increase engagement across both digital and physical interfaces.' }
    ],

    // 首页用户测评区块
    PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
    PROXIO_TESTIMONIALS_TITLE: '用户反馈',
    PROXIO_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
    PROXIO_TESTIMONIALS_TEXT_2:
        '越来越多的宠物家庭，选择与我们一起打造真正属于“你和它”的理想空间。从小型角落改造到全屋共生设计，我们用专业和共情陪伴每一次改变的开始。',

    // 用户测评处的跳转按钮
    PROXIO_TESTIMONIALS_BUTTON_URL: '/about',
    PROXIO_TESTIMONIALS_BUTTON_TEXT: '联系我',

    // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
    PROXIO_TESTIMONIALS_ITEMS: [
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '原来不是我宠物太调皮，是我们家的空间从没考虑过它的感受。一栖帮我重新规划了客厅动线后，狗狗每天都知道自己该去哪了。 ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '来自杭州的柯基主人',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '我们家猫有三只，一直互相抢地盘。一栖设计把阳台、书架和走廊都利用起来，做了‘三猫三层空间’，现在和平了！',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '来自宁波的三猫家庭',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '我养的是蛇，很多设计师听了就推我。一栖不仅没避讳，还把恒温箱做成了书柜一部分，美得像艺术装置。( •̀ ω •́ )y ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '来自慈溪的爬宠爱好者',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '没人理解我们家的龙猫要静要暗，还怕热。一栖设计了一个藏在柜子里的活动塔，连访客都看不出来那里住着小家伙。',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '来自绍兴的异宠家庭',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '他们连鱼缸的位置都讲究风口、光线和视线交汇，真的是‘为鱼着想’，也是为人打造的疗愈角落。',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Anjhon`s',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '来自嘉兴的鱼缸爱好者',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT: '我家鹦鹉特别黏人，一栖把鸟笼做进了窗边角柜，还配了防羽毛抽屉，太贴心了。',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar.png',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN考验辅导',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: ' 来自温州的鸟宠主理人',
            PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
        }
    ],

    //   FAQ 常见问题模块
    PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
    PROXIO_FAQ_TITLE: '常见问题解答',
    PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
    PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
    PROXIO_FAQS: [
        { q: '你们的设计服务怎么收费？是按房间、按宠物数量还是面积算的？', a: '我们的收费方式基于项目类型 + 宠物复杂度 + 空间改造深度 + 空间面积综合评估。具体报价会在了解你的需求后，提供一份详细的设计服务建议书，内容包括设计范围、周期、输出内容与价格明细。我们不按宠物数量收费，但会根据宠物种类及特殊行为需求作适当调整。' },
        { q: '你们的设计是完全定制的吗？有没有模板可参考？', a: '我们的服务是100% 完全定制，不使用模板。每一个空间都是根据你与宠物的生活习惯、性格、居住结构独立规划。当然，我们也会提供过往案例图片与结构图作为灵感参考，让你更容易理解设计方向，但不会复制同款。' },
        { q: ' 你们的服务是只出设计图，还是也能帮我落地施工？', a: '目前我们以纯设计为主，不参与施工。但会为你提供完整的设计图、主材建议、宠物用品选型清单，支持你自行对接本地施工团队。同时我们也可协助远程选品搭配，减少落地风险。如果你在宁波/慈溪地区，我们也可推荐合作施工团队。' },
        { q: ' 我家每种宠物习性完全不同，你们能考虑这些个性差异吗？', a: '当然可以！每一个设计方案开始前，我们会通过问卷和沟通，了解你宠物的行为特点（如爱跳、怕水、怕吵、护食等），并在空间中做相应安排，比如设立安全角落、缓冲区、安静通道等，让家更贴合它的天性。' },
    ],

    // 关于作者区块
    PROXIO_ABOUT_ENABLE: false, // 关于作者区块区块开关
    PROXIO_ABOUT_TITLE: '关于作者',
    PROXIO_ABOUT_TEXT_1: 'I am an Architect Turned Into a Product Designer',
    PROXIO_ABOUT_TEXT_2:
        'With a background in architecture, I now apply my expertise to product design, blending aesthetics, functionality, and innovation. My goal is to create modern, user-focused designs that bring your vision to life.',
    PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
    PROXIO_ABOUT_KEY_1: '经验年限',
    PROXIO_ABOUT_VAL_1: '10年+',
    PROXIO_ABOUT_KEY_2: '客户',
    PROXIO_ABOUT_VAL_2: '1000+',
    PROXIO_ABOUT_KEY_3: '交付项目',
    PROXIO_ABOUT_VAL_3: '5000+',
    PROXIO_ABOUT_KEY_4: '累积创作时长（小时）',
    PROXIO_ABOUT_VAL_4: '10000+',

    PROXIO_ABOUT_BUTTON_URL: '/about',
    PROXIO_ABOUT_BUTTON_TEXT: '关于我',

    // 横向滚动文字
    PROXIO_BRANDS_ENABLE: true, // 滚动文字
    PROXIO_BRANDS: [
        '宠物友好空间设计',
        '人宠共生的生活美学',
        '每一处角落都为生命留白',
        '完全定制 · 为你和TA而生'
    ],

    PROXIO_FOOTER_SLOGAN: '我们用设计，让每一个生命在家的每一寸都被温柔对待。',

    // 页脚三列菜单组
    // 页脚菜单
    PROXIO_FOOTER_LINKS: [
        {
            name: '关于我',
            menus: [
                {
                    title: '品牌介绍',
                    href: 'https://blog.tangly1024.com'
                },
                  {
                    title: '设计理念',
                    href: 'https://www.tangly1024.com'
                }
            ]
        },
        {
            name: '联系我',
            menus: [
                { title: '微信公众号', href: 'https://github.com/tangly1024/NotionNext' },
                {
                    title: '小红书',
                    href: 'https://docs.tangly1024.com/article/how-to-develop-with-notion-next'
                },
                {
                    title: 'Bilibili',
                    href: 'https://github.com/tangly1024/NotionNext/issues/new/choose'
                },
                {
                    title: '抖音',
                    href: 'https://github.com/tangly1024/NotionNext/discussions'
                },
                {
                    title: '邮箱',
                    href: 'https://blog.tangly1024.com/about'
                }
            ]
        }],

    PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

    PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
    PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

    // 404页面的提示语
    PROXIO_404_TITLE: '走丢辣！~',
    PROXIO_404_TEXT: '怎么办怎么办！！联系我或回首页看看其他的吧',
    PROXIO_404_BACK: '回主页！立刻！马上！now！',

    // 页面底部的行动呼吁模块
    PROXIO_CTA_ENABLE: true,
    PROXIO_CTA_TITLE: '和我一起',
    PROXIO_CTA_TITLE_2: '为你的宠物，打造一个真正自在的家',
    PROXIO_CTA_DESCRIPTION:
        '空间不止属于人，我们帮助你和宠物一起拥有更舒适、温暖、有爱的生活环境',
    PROXIO_CTA_BUTTON: true, // 是否显示按钮
    PROXIO_CTA_BUTTON_URL:
        '/about',
    PROXIO_CTA_BUTTON_TEXT: '立即预约设计',

    PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
    PROXIO_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
    PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
