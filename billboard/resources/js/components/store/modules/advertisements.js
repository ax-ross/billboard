import router from "../../../router";

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
    },
    updateAdvertisement({}, data) {
        axios.patch(`/api/advertisements/${data.id}`, {
            title: data.title,
            price: data.price,
            description: data.description
        })
            .then(res => {
                router.push({ name: 'advertisements.show', params: { id: data.id } })
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
