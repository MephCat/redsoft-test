export const state = () => ({
  artList: []
})

export const mutations = {
  setArtList(state, artList) {
    state.artList = artList
  }
}

export const actions = {
  fetch({commit}) {
    const artList = [
      {
        id: 1,
        name: '«Рождение Венеры» Сандро Боттичелли',
        imgUrl: 'img/painting-63186_1280 1.jpg',
        cost: 1000000,
        discount: 2000000,
        purchased: false
      },
      {
        id: 2,
        name: '«Тайная вечеря»  Леонардо да Винчи',
        imgUrl: 'img/ae973f6678e037cd297053384aa7dca0 1.jpg',
        cost: 3000000,
        discount: null,
        purchased: false
      },
      {
        id: 3,
        name: '«Тайная вечеря»  Леонардо да Винчи',
        imgUrl: 'img/image-19 1.jpg',
        cost: 5000000,
        discount: 6000000,
        purchased: false
      },
      {
        id: 4,
        name: '«Тайная вечеря»  Леонардо да Винчи',
        imgUrl: 'img/20152310142330 1.jpg',
        cost: 1000000,
        discount: 2000000,
        purchased: true
      }
    ];
    commit('setArtList', artList)
  }
}

export const getters = {
  artList: s => s.artList
}
