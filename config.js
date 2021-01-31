module.exports = {
    platform: 'github',
    token: process.env.GITHUB_ACCESS_TOKEN,

    hostRules: [{
        hostType: 'github',
        domainName: 'github.com',
        token: process.env.GITHUB_ACCESS_TOKEN,
    }]
};
