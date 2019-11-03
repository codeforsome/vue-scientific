import Mock from 'mockjs'
Mock.mock('/api/login/verify', 'post', data => {
    return {
        msg: 'aaa',
        success: true,
        data: "22222222222222"
    }
})


Mock.mock(RegExp('/api/thesis/update\\?*'), 'post', data => {
    return {
        msg: 'aaa',
        success: true,
        data: {
            username: 111,
            password: 222,
        }
    }
})

Mock.mock('/api/file/add', 'post', data => {
    return {
        msg: 'aaa',
        success: true,
        data: {
            username: 111,
            password: 222,
        }
    }
})

Mock.mock('/api/thesis/update', 'post', data => {
    return {
        msg: 'aaa',
        success: true,
        data: {
            username: 111,
            password: 222,
        }
    }
})

Mock.mock('/api/user/get/hot', 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: [{
            id: '123',
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }, {
            id: '12ewe3',
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }
            , {
            id: '1223ewe3',
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        },
        {
            id: 'ewee12ewe3',
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }
            , {
            id: '232312ewe3',
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }, {
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }]
    }
})

Mock.mock('/api/user/get/hot', 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: [{
            id: '123',
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }, {
            id: '12ewe3',
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }
            , {
            id: '1223ewe3',
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        },
        {
            id: 'ewee12ewe3',
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }
            , {
            id: '232312ewe3',
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }, {
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }]
    }
})

Mock.mock( RegExp('/api/thesis/get/userid/*'), 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: [{
            id: '12ewe3',
            title: '讨论中国电商',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            file_path: 'rtet',
            collectNum: 10,
            readNum: '99'
        },
        {
            id: '4243',
            title: '讨论中国电商',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            file_path: 'rtet',
            collectNum: 10,
            readNum: '99'
        },
        {
            title: '讨论中国电商',
            id: '24323',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            file_path: 'rtet',
            collectNum: 10,
            readNum: '99'
        },
        {
            id: '88888888',
            title: '讨论中国电商',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            file_path: 'rtet',
            collectNum: 10,
            readNum: '99'
        },
        ]

    }
})

Mock.mock('/api/thesis/get/hot', 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: [{
            id: '12ewe3',
            title: '讨论中国电商',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            file_path: 'rtet',
            collectNum: 10,
            readNum: '99'
        },
        {
            id: '4243',
            title: '讨论中国电商',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            file_path: 'rtet',
            collectNum: 10,
            readNum: '99'
        },
        {
            title: '讨论中国电商',
            id: '24323',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            file_path: 'rtet',
            collectNum: 10,
            readNum: '99'
        },
        {
            id: '88888888',
            title: '讨论中国电商',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            file_path: 'rtet',
            collectNum: 10,
            readNum: '99'
        },
        ]

    }
})
Mock.mock('/api/thesis/get', 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: [{
            id: '12ewe3',
            title: '讨论中国电商',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            file_path: 'rtet',
        },
        {
            id: '4243',
            title: '讨论中国电商',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            file_path: 'rtet',
        },
        {
            title: '讨论中国电商',
            id: '24323',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            file_path: 'rtet',
        },
        {
            id: '88888888',
            title: '讨论中国电商',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            file_path: 'rtet',
        },
        ]

    }
})

var regs = RegExp('/api/thesis/get\\?*');
Mock.mock(regs, 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: {
            id: '4243',
            title: '讨论中国电商',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            authorId: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            filePath: './assets/新建文本文档.txt',
            disciplineSpecialty: '343444',
        }
    }
})
Mock.mock(RegExp('/api/thesis/get/*'), 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: {
            id: '4243',
            title: '讨论中国电商',
            abstracts: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            authorId: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            filePath: './assets/新建文本文档.txt',
            disciplineSpecialty: '343444',
        }
    }
})

Mock.mock('/api/file/img/add', 'post', data => {
    return {
        msg: 'aaa',
        success: true,
        data: {
            username: 111,
            password: 222,
        }
    }
})

Mock.mock('/api/thesis/add', 'post', data => {
    return {
        msg: 'aaa',
        success: true,
        data: {
            username: 111,
            password: 222,
        }
    }
})

Mock.mock(RegExp('/api/user/get/*'), 'get', data => {
    return {
        data: {
            id: '123',
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            education:'教授',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99',
            type:1,
        }
    }
})

var reg = RegExp('/api/user/get*');
Mock.mock(reg, 'get', data => {
    return {
        data: {
            nickname: 111,
            education: 222,
            sex: 'fd',
            college: 'sdf'
        },
    }
})


Mock.mock( RegExp('/api/item/get/userid/*'), 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: [{
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        ]

    }
})


Mock.mock(RegExp('/api/item/get/*'), 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: {
            id: '4243',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            authorId: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            disciplineSpecialty: '343444',
        }
    }
})

Mock.mock( RegExp('/api/item/new'), 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: [{
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        ]

    }
})
