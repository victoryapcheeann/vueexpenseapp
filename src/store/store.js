import Vue from 'vue';
import VueX from 'vuex';
import _ from 'lodash';

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        expenseList: [
            {id: 1, date: '2017-01-01', expense: 20},
            {id: 2, date: '2018-12-31', expense: 300},
            {id: 3, date: '2018-02-10', expense: 1},
            {id: 4, date: '2018-02-09', expense: 2},
            {id: 5, date: '2018-02-02', expense: 3}
        ]
    },
    getters: {
        expenseListStoredByDate(state){
          let sortedByDateList = state.expenseList.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
          return sortedByDateList;
        },
        expenseListForChart(state){
            const output = _(state.expenseList)
                    .map(item => {
                        return {
                            date: item.date,
                            expense: parseInt(item.expense)
                        }
                    })
                    .groupBy('date')
                    .map((objs, key) => ({
                        'date': key,
                        'expense': _.sumBy(objs, 'expense') }))
                    .value();
            let dateData = _.map(output, 'date');
            let expenseData = _.map(output, 'expense');

            return {output, dateData, expenseData}
        }
    },
    mutations: {
        addExpense(state, payload) {
           state.expenseList.push(payload);
        },
        deleteExpense(state, id) {
            let index = state.expenseList.map((item)=> {
              return item.id
            }).indexOf(id);
            state.expenseList.splice(index, 1);
         }
    },
    actions: {
        addExpense: ({ commit }) => {
            commit('addExpense');
        },
        deleteExpense: ({ commit }) => {
            commit('deleteExpense');
        },
        asyncAddExpense: ({ commit }) => {
            setTimeout(() => {
                commit('addExpense');
            }, 1000);
        },
        asyncDeleteExpense: ({ commit }) => {
            setTimeout(() => {
                commit('deleteExpense');
            }, 1000);
        }
    }
});
