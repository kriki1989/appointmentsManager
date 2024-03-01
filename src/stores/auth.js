import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { accessToken } from './data/accessTokenDate';

export const useAuthStore = defineStore('auth', () => {
    // state
    const access_token = ref('');
    const userName = ref('');
    const isAuthenticated = ref(false);

    // getters
    const getAccessToken = computed( () => access_token.value )
    const getUserName = computed( () => userName.value )
    const getIsAuthenticated = computed( () => isAuthenticated.value )

    // actions
    const fetchAccessToken = () => {
        access_token.value = accessToken.access_token;
        userName.value = accessToken.userName;
        isAuthenticated.value = true;
    }
    const login = ( payload ) => {
        //payload = {username: 'demo', password: 'demo'};
        if (payload.username === 'demo' && payload.password === 'demo') {
            fetchAccessToken();
        } else {
            return 'Either Password or Username, or both are wrong.';
        }
    }
    const logout = ( payload ) => {
        access_token.value = '';
        userName.value = '';
        isAuthenticated.value = false;
    }

    return {
        getAccessToken,
        getUserName,
        getIsAuthenticated,

        login,
        logout
    }
})
