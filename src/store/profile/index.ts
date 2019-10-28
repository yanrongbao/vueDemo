// profile/index.ts
import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ProfileState } from './interface';
import { RootState } from '../interface';

export const state: ProfileState = {
    user: undefined,
    error: false,
};

const namespaced: boolean = true;

export const profile: Module<ProfileState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
