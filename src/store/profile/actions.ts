// profile/actions.ts
import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProfileState, User } from './interface';
import { RootState } from '../interface';
import types from './types';

export const actions: ActionTree<ProfileState, RootState> = {
    fetchData({ commit }): any {
        axios({
            url: 'https://....',
        }).then(
            (response) => {
                const payload: User = response && response.data;
                commit(types.PROFILE_LOADED, payload);
            },
            (error) => {
                commit(types.PROFILE_ERROE);
            },
        );
    },
};
