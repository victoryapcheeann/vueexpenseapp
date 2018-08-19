import Vue from 'vue';
import VueX from 'vuex';
import _ from 'lodash';

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        expenseList: [
            {id: 1, date: '2018-01-01', expense: 20},
            {id: 2, date: '2018-10-31', expense: 30}
        ]
    },
    getters: {
        expenseListSortedByDate(state){
          let sortedByDateList = state.expenseList.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
          return sortedByDateList;
        },
        expenseListForChart(state){
            const summedResult = _(state.expenseList)
            .map(item => {
                return {
                    date: item.date,
                    expense: parseInt(item.expense)
                }
            })
            .groupBy("date")
            .mapValues(item => {
                 return _.sumBy(item, 'expense');
             })
            .value()
            return summedResult;
        }
    },
    mutations: {
        addExpense(state, payload) {
           state.expenseList.push(payload);
        },
        deleteExpense(state, id) {
            let index = state.expenseList.map(function(item) {
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
