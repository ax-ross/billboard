const state = {
    advertisement: null
}

const getters = {
    advertisement: () => state.advertisement
}

const actions = {
    getAdvertisement(store, id) {
        axios.get(`/api/advertisements/${id}`)
            .then(res => {
                store.commit('setAdvertisement', res.data.data)
            })
    }
}

const mutations = {
    setAdvertisement(state, advertisement) {
        state.advertisement = advertisement
    }
}

export default {
    state, mutations, getters, actions
}
