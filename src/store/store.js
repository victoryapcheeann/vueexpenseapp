import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        expenseList: [{
            id: 1,
            date: '2017-01-01',
            expense: 20
          },{
            id: 2,
            date: '2018-12-31',
            expense: 300
          },{
            id: 3,
            date: '2018-02-10',
            expense: 1
          },{
            id: 4,
            date: '2018-02-09',
            expense: 2
          },{
            id: 5,
            date: '2018-02-02',
            expense: 3
          }]
    },
    getters: {
        expenseListStoredByDate(state){
          let storedList = [...state.expenseList].sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
          return storedList;
        }
    }
});
