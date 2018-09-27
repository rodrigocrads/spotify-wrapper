import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import {
    search,
    searchAlbums,
    searchArtists,
    searchPlaylists,
    searchTracks } from '../src/main.js';

describe('Spotify Wrapper', () => {

    describe('Smoke tests', () => {
        it('Should exists the search method', () => {
            expect(search).to.be.exist;
        });

        it('Should exists the searchAlbums method', () => {
            expect(searchAlbums).to.be.exist;
        });

        it('Should exists the searchArtists method', () => {
            expect(searchArtists).to.be.exist;
        });

        it('Should exists the searchTracks method', () => {
            expect(searchTracks).to.be.exist;
        });

        it('Should exists the searchPlaylists method', () => {
            expect(searchPlaylists).to.be.exist;
        });
    });

    describe('Generic Search', () => {
        it('should call fetch function', () => {
            const fetchedStub = sinon.stub(global, 'fetch');
            const artists = search();

            expect(fetchedStub).to.have.been.calledOnce;
        });
    });

});
