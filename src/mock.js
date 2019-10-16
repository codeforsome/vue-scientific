import Mock from 'mockjs'
Mock.mock('/api/login/verify', 'post', data => {
    return {
        msg: 'aaa',
        success: true,
        data: "22222222222222"
    }
})

Mock.mock('/api/user/update', 'post', data => {
    return {
        msg: 'aaa',
        success: true,
        data: {
            username: 111,
            password: 222,
        }
    }
})
Mock.mock('/api/user/get?hot', 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: [{
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
        }
            , {
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        },
        {
            nickname: "蝴蝶飞",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }
            , {
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

Mock.mock('/api/thesis/get', 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: [{
            title: '讨论中国电商',
            abstract: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商，法大，东方，范德萨',
            file_path: 'rtet',
        },
        {
            title: '讨论中国电商',
            abstract: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商，法大，东方，范德萨',
            file_path: 'rtet',
        },
        {
            title: '讨论中国电商',
            abstract: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商，法大，东方，范德萨',
            file_path: 'rtet',
        },
        {
            title: '讨论中国电商',
            abstract: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            date: '2019-05-03',
            keyword: '电商，法大，东方，范德萨',
            file_path: 'rtet',
        },
        ]

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
