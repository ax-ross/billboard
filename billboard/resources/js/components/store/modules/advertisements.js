const state = {
    advertisement: null,
    advertisements: null
}

const getters = {
    advertisement: () => state.advertisement,
    advertisements: () => state.advertisements
}

const actions = {
    getAdvertisement({commit}, id) {
        axios.get(`/api/advertisements/${id}`)
            .then(res => {
                commit('setAdvertisement', res.data.data)
            })
    },
    getAdvertisements({commit}) {
        axios.get('api/advertisements')
            .then(res => {
                commit('setAdvertisements', res.data.data)
            });
    },
    deleteAdvertisement({dispatch}, id) {
        axios.delete(`/api/advertisements/${id}`)
            .then(res => {
                dispatch('getAdvertisements');
            })
    }
}

const mutations = {
    setAdvertisement(state, advertisement) {
        state.advertisement = advertisement
    },
    setAdvertisements(state, advertisements) {
        state.advertisements = advertisements
    },
}

export default {
    state, mutations, getters, actions
}
