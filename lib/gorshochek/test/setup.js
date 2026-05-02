const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');

function plugin(mod) {
    return mod.default || mod;
}

global.sinon = require('sinon');
global.sinon.sandbox = global.sinon.sandbox || {
    create: global.sinon.createSandbox
};
global.should = chai.should();

chai.use(plugin(chaiAsPromised));
chai.use(plugin(sinonChai));
