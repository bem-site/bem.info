const chai = require('chai');

global.sinon = require('sinon');
global.should = chai.should();

chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));
