import * as indexApi from './service';

export default {
  namespace: 'index',
  state: {},

  effects: {
    // * effectsDemo(_, {call, put}) {
    //   const {status, data} = yield call(indexApi.demo, {});
    //   if (status === 'ok') {
    //     yield put({
    //       type: 'save',
    //       payload: data
    //     });
    //   }
    // },
    * getData(_, {call, put}) {
      const {status, data} = yield call(indexApi.getData, {});
      if (status === 'ok') {
        yield put({
          type: 'save',
          payload: {data}
        });
      }
    }
  },

  reducers: {
    save(state, {payload}) {
      // return {...state, ...payload};
      return payload;
    },
  },

};
