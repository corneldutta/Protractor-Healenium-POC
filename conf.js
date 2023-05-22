exports.config = {
    framework: 'jasmine',
    specs: ['./tests/*.spec.js'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--no-sandbox'],
            'args': ['--disable-dev-shm-usage'],
        },

        //selenium-hub docker image running on 4444
        seleniumAddress: 'http://localhost:8085'
    },
}
