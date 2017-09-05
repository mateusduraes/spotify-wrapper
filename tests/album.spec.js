// getAlbum
// getAlbumTracks

import chai, { expect } from 'chai';
import { getAlbum, getAlbumTracks } from '../src/album';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import sinonStubPrommise from 'sinon-stub-promise';

sinonStubPrommise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {

  let stubedFetch;
  let promise;
  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {

    it('should have get album method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have get album tracks method', () => {
      expect(getAlbumTracks).to.exist;
    });

  });

  describe('get album', () => {
    // verifica se o fetch ocorre
    // verifica se o fetch ocorre com a url desejada
    // verifica se o dado é recebido pela promise

    it('should call fetch method', () => {
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch method with the correct url', () => {
      const album = getAlbum('382ObEPsp2rxGrnsizN5TX');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/382ObEPsp2rxGrnsizN5TX');

      const album2 = getAlbum('382ObEPsp2rxGrnsizN5TK');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/382ObEPsp2rxGrnsizN5TK');
    });

    it('it should return the correct data from promise', () => {
      promise.resolves({'album' : 'name'});
      const album = getAlbum('382ObEPsp2rxGrnsizN5TX');
      expect(album.resolveValue).to.be.eql({'album' : 'name'});
    });

  });

});
