import {shallowMount} from '@vue/test-utils';
import App from './App.vue';

// eslint-disable-next-line no-undef
describe('it tests App component', () => {

    // eslint-disable-next-line no-undef
    test('it updates document title with title data', () => {
        shallowMount(App, {
            data: () => ({title: 'DOCUMENT_TITLE'})
        });

        // eslint-disable-next-line no-undef
        expect(document.title).toEqual('DOCUMENT_TITLE');
    });
});
