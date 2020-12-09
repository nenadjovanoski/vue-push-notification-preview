const { name, description, repository } = require('../../package')

module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: name,
            description: description
        }
    },
    themeConfig: {
        repo: repository.url,
        docsDir: 'docs',
        editLinks: true,
        docsBranch: 'master',
        editLinkText: 'Help us improve this page!',
        search: true,
        smoothScroll: true,
        nav: [
            {
                text: 'Docs',
                link: '/docs/installation/getting-started'
            }
        ],
        sidebar: {
            '/docs/': [
                {
                    title: 'Installation',
                    collapsable: false,
                    children: [
                        'installation/getting-started',
                        'installation/api'
                    ]
                },
                {
                    title: 'AndroidPreview',
                    collapsable: false,
                    children: [
                        'android/props',
                        'android/events',
                        'android/slots'
                    ]
                },
                {
                    title: 'IphonePreview',
                    collapsable: false,
                    children: [
                        'iphone/props',
                        'iphone/events',
                        'iphone/slots'
                    ]
                }
            ]
        }
    }
}
