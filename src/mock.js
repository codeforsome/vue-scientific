import Mock from 'mockjs'
Mock.mock('/api/login/verify', 'post', data => {
    return {
        msg: 'aaa',
        success: true,
        data: {
            userType:1,
            userToken:33,
            user: {
                id: '123',
                nickname: "蝴蝶飞",
                college: "信息学院",
                headIcon: './../assets/logo.png',
                education:'教授',
                thesisNum: '5',
                collectNum: 10,
                readNum: '99',
            }
        }
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

Mock.mock('/api/admin/user/get', 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: [{
            id: '123',
            nickname: "蝴蝶飞",
            username:'11',
            college: "信息学院",
            createDate:'2019-11-23 17:11:20',
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99',
            type:0,
            status:1,
        }, {
            id: '12ewe3',
            nickname: "蝴蝶飞",
            college: "信息学院",
            createDate:'2019-11-23 17:11:20',
            status:1,
            type:0,
            username:'1441',
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }
            , {
            id: '1223ewe3',
            type:0,
            status:0,
            nickname: "蝴蝶飞",
            createDate:'2019-11-23 17:11:20',
            username:'53',
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        },
        {
            username:'4444',
            id: 'ewee12ewe3',
            nickname: "蝴蝶飞",
            createDate:'2019-11-23 17:11:20',
            type:0,
            status:2,
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }
            , {
            id: '232312ewe3',
            nickname: "蝴蝶飞",
            createDate:'2019-11-23 17:11:20',
            type:1,
            status:1,
            username:'11',
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }, {
            status:0,
            nickname: "蝴蝶飞",
            createDate:'2019-11-23 17:11:20',
            type:2,
            username:'11',
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
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        ]

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
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        ]

    }
})

Mock.mock( RegExp('/api/admin/item/get/all'), 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: [{
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            authorId: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            authorId: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            authorId: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            authorId: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        ]

    }
})

Mock.mock( RegExp('/api/item/apply/get/*'), 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: [{
            id:1,
          date: "2016-05-02",
          name: "1王小虎",
          apply: "",
          check: "1",
          file: "",
          professorId:'4',
        },
        {
            id:2,
          date: "2016-05-04",
          name: "2王小虎",
          apply: "未通过",
          check: "1",
          file: "",
          professorId:'3',

        },
        {
            id:3,
          date: "2016-05-01",
          name: "3王小虎",
          apply: "未通过",
          check: "0",
          file: "",
          professorId:'2',

        },
        {
            id:4,
          date: "2016-05-03",
          name: "4王小虎",
          apply: "通过",
          check: "1",
          file: "/a/a/a.png",
          professorId:'1',
        }
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
            createDate: 'err',
            date: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
            disciplineSpecialty: '343444',
        }
    }
})


Mock.mock(RegExp('/api/user/professor/get/all'), 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data:  [{
            id: '1',
            nickname: "蝴蝶飞1",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }, {
            id: '2',
            nickname: "蝴蝶飞2",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }
            , {
            id: '3',
            nickname: "蝴蝶飞3",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        },
        {
            id: '4',
            nickname: "蝴蝶飞4",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }
            , {
            id: '5',
            nickname: "蝴蝶飞5",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }, {
            id: '6',
            nickname: "蝴蝶飞6",
            college: "信息学院",
            headIcon: './../assets/logo.png',
            thesisNum: '5',
            collectNum: 10,
            readNum: '99'
        }],
    }
})

Mock.mock( RegExp('/api/user/professor/get/item'), 'get', data => {
    return {
        msg: 'aaa',
        success: true,
        data: [{
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        {
            id: '12ewe3',
            title: '讨论中国电商',
            content: '电商，淘宝电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨电商，法大，东方，范德萨',
            author_id: 222,
            category: 'err',
            createDate: '2019-05-03',
            keyword: '电商-法大-东方-范德萨',
        },
        ]

    }
})


