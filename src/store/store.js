import Vue from 'vue';
import VueX from 'vuex';
import _ from 'lodash';

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        expenseList: [
            {id: 0, date: '2018-08-01', expense: 20},
            {id: 1, date: '2018-08-01', expense: 20},
            {id: 2, date: '2018-08-31', expense: 30},
            {id: 3, date: '2018-08-10', expense: 10}
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

            console.log(summedResult)
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
