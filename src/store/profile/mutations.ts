// profile/mutations.ts
import { MutationTree } from 'vuex';
import { ProfileState, User } from './interface';
import types from './types';

export const mutations: MutationTree<ProfileState> = {
    [types.PROFILE_LOADED](state, payload: User) {
        state.error = false;
        state.user = payload;
    },
    [types.PROFILE_ERROE](state) {
        state.error = true;
        state.user = undefined;
    },
};
