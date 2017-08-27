import { expect } from 'chai';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main'

describe('Spotify Wrapper', () => {

  describe('Smoke Tests', () => {
    it('should exist the seach method', () => {
      expect(search).to.exist;
    });

    it('should exist the seach method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the seach method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the seach method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the seach method', () => {
      expect(searchPlaylists).to.exist;
    });
  })

});
