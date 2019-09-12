import { firebaseAction } from 'vuexfire'

const state = {
    menuItems: []
}

const getters = {
    getMenuItems: state => state.menuItems
}

const mutations = {

}

const actions = {
    setMenuRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
        // this will unbind any previously bound ref to 'todos'
        bindFirebaseRef('menuItems', ref)
        // you can unbind any ref easily
    })
}

export default {
    state,
    mutations,
    getters,
    actions
}