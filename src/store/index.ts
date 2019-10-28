import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './interface';
import { profile } from './profile';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: 'v1.0.0',
        name: 'aaa',
    },
    modules: {
        profile,
    },
};
export default new Vuex.Store<RootState>(store);
