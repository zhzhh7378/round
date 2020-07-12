module.exports = {

    title: '团团园园',
    description: '团团园园ui库',
    plugins: ['@vuepress/last-updated', '@vuepress/search', {
        searchMaxSuggestions: 10
    }, 'demo-container'],
    head: [],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: 'API', link: '/api/' },
            { text: '组件', link: '/components/' },
            { text: 'GitHub', link: 'http://www.baidu.com' }

        ],
        sidebar: {
            '/': [
                {
                    title: '开发指南',
                    collapsable: false,
                    children: [
                    ]
                },
                {
                    title: '组件',
                    collapsable: false,
                    children: [

                    ]
                }

            ],
            '/guide': [

            ],
            '/api': [],
            '/components': []
        }
    }

}