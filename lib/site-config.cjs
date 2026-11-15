'use strict';

module.exports = function siteConfig(environment = process.env.DEPLOY_ENV || 'production') {
    if (!['staging', 'production'].includes(environment)) {
        throw new Error('Unknown deployment environment: ' + environment);
    }
    const staging = environment === 'staging';
    return {
        environment,
        apex: staging ? 'https://test.bem.info' : 'https://bem.info',
        origins: {
            ru: staging ? 'https://ru-test.bem.info' : 'https://ru.bem.info',
            en: staging ? 'https://en-test.bem.info' : 'https://en.bem.info'
        }
    };
};
