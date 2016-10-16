var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('reducers', ()=>{
	describe('searchTextReducer', ()=>{
		it('should set searchText', ()=>{
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'something'
			}
			var res = reducers.searchTextReducer(df(''), df(action));
			expect(res).toEqual(action.searchText);
		});
	});	

	describe('toggleShowCompleted',()=>{
		it('should toggle showCompleted', ()=>{
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED',
			}
			var res = reducers.showCompletedReducer(df(false), df(action));
		});
	});
});