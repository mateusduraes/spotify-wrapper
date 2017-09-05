How spie an method like fetch?

* import chai
* import sinon
* import sinon-chai
* call chai.use(sinon)
* declare global-fetch with require of 'node-fetch' module
* declare in the scope, the stubbed fetch, like 'let stubbedFetch'
* use beforeEach, like the following
  * stubedFetch = sinon.stub(global, fetch);
* use afterEach, to reset the stub to its initial value
  * stubedFetch.restore();


