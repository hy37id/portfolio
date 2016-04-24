import { expect } from '../test_helper';
import itemReducer from '../../../../src/cms/reducers/items';
import { FETCH_ITEMS, FETCH_ITEM, CREATE_ITEM, UPDATE_ITEM, DELETE_ITEM, 
    TOGGLE_ITEM, MOVE_ITEM_TOP, MOVE_ITEM_UP, MOVE_ITEM_DOWN, MOVE_ITEM_BOTTOM 
} from '../../../../src/cms/constants';

describe('Item Reducer', () => {

    it('handles action with unknown type', () => {
        expect(itemReducer([], {})).to.eql([]);
    });

    it('handles action of type FETCH_ITEMS', () => {
        const action = { type: FETCH_ITEMS, payload: { items: [{ id:1 }] }};
        const expectedResponse = [{ id: 1 }];
        expect(itemReducer([], action)).to.eql(expectedResponse);
    });

    it('handles action of type CREATE_ITEM', () => {
        const action = { 
            type: CREATE_ITEM, 
            payload: {
                item: { type: "ItemHeading" }
            }
        };
        
        const state = [
            { type: 'ItemSubHeading' }
        ];
        
        const expectedResponse = [
            { type: 'ItemSubHeading' }, 
            { type: 'ItemHeading' }
        ];
        
        expect(itemReducer(state, action)).to.eql(expectedResponse);
    });

    it('handles action of type UPDATE_ITEM', () => {
        const action = {
            type: UPDATE_ITEM,
            payload: {
                sortRank: 1,
                item: { type: "ItemSubHeading" }
            }
        };
        
        const state = [
            { type: 'ItemSubHeading' },
            { type: 'ItemHeading' },
            { type: 'ItemTwitter' }
        ];
        
        const expectedResponse = [
            { type: 'ItemSubHeading' },
            { type: 'ItemSubHeading' },
            { type: 'ItemTwitter' }
        ];
        
        expect(itemReducer(state, action)).to.eql(expectedResponse);
    });

    it('handles action of type DELETE_ITEM', () => {
        const action = {
            type: DELETE_ITEM,
            payload: {
                sortRank: 1
            }
        };
        
        const state = [
            { type: 'ItemSubHeading' },
            { type: 'ItemHeading' },
            { type: 'ItemTwitter' }
        ];
        
        const expectedResponse = [
            { type: 'ItemSubHeading' },
            { type: 'ItemTwitter' }
        ];
        
        expect(itemReducer(state, action)).to.eql(expectedResponse);
    });

    it('handles action of type MOVE_ITEM_TOP', () => {
        const action = {
            type: MOVE_ITEM_TOP,
            payload: {
                sortRank: 1
            }
        };

        const state = [
            { type: 'ItemSubHeading' },
            { type: 'ItemHeading' },
            { type: 'ItemTwitter' }
        ];

        const expectedResponse = [
            { type: 'ItemHeading' },
            { type: 'ItemSubHeading' },
            { type: 'ItemTwitter' }
        ];

        expect(itemReducer(state, action)).to.eql(expectedResponse);
    });

    it('handles action of type MOVE_ITEM_TOP when state is empty', () => {
        const action = {
            type: MOVE_ITEM_TOP,
            payload: {
                sortRank: 0
            }
        };

        const state = [
            { type: 'ItemSubHeading' }
        ];

        const expectedResponse = [
            { type: 'ItemSubHeading' }
        ];

        expect(itemReducer(state, action)).to.eql(expectedResponse);
    });

    it('handles action of type MOVE_ITEM_UP', () => {
        const action = {
            type: MOVE_ITEM_UP,
            payload: {
                sortRank: 1
            }
        };

        const state = [
            { type: 'ItemSubHeading' },
            { type: 'ItemHeading' }
        ];

        const expectedResponse = [
            { type: 'ItemHeading' },
            { type: 'ItemSubHeading' }
        ];

        expect(itemReducer(state, action)).to.eql(expectedResponse);
    });

    it('handles action of type MOVE_ITEM_UP when state is empty', () => {
        const action = {
            type: MOVE_ITEM_UP,
            payload: {
                sortRank: 0
            }
        };

        const state = [
            { type: 'ItemSubHeading' }
        ];

        const expectedResponse = [
            { type: 'ItemSubHeading' }
        ];

        expect(itemReducer(state, action)).to.eql(expectedResponse);
    });

    it('handles action of type MOVE_ITEM_DOWN', () => {
        const action = {
            type: MOVE_ITEM_DOWN,
            payload: {
                sortRank: 0
            }
        };

        const state = [
            { type: 'ItemSubHeading' },
            { type: 'ItemHeading' }
        ];

        const expectedResponse = [
            { type: 'ItemHeading' },
            { type: 'ItemSubHeading' }
        ];

        expect(itemReducer(state, action)).to.eql(expectedResponse);
    });

    it('handles action of type MOVE_ITEM_DOWN when sortRanks equals to state length', () => {
        const action = {
            type: MOVE_ITEM_DOWN,
            payload: {
                sortRank: 1
            }
        };

        const state = [
            { type: 'ItemSubHeading' },
            { type: 'ItemHeading' }
        ];

        const expectedResponse = [
            { type: 'ItemSubHeading' },
            { type: 'ItemHeading' }
        ];

        expect(itemReducer(state, action)).to.eql(expectedResponse);
    });

    it('handles action of type MOVE_ITEM_BOTTOM', () => {
        const action = {
            type: MOVE_ITEM_BOTTOM,
            payload: {
                sortRank: 0
            }
        };

        const state = [
            { type: 'ItemSubHeading' },
            { type: 'ItemHeading' }
        ];

        const expectedResponse = [
            { type: 'ItemHeading' },
            { type: 'ItemSubHeading' }
        ];

        expect(itemReducer(state, action)).to.eql(expectedResponse);
    });

    it('handles action of type MOVE_ITEM_DOWN when sortRanks equals to state length', () => {
        const action = {
            type: MOVE_ITEM_BOTTOM,
            payload: {
                sortRank: 1
            }
        };

        const state = [
            { type: 'ItemSubHeading' },
            { type: 'ItemHeading' }
        ];

        const expectedResponse = [
            { type: 'ItemSubHeading' },
            { type: 'ItemHeading' }
        ];

        expect(itemReducer(state, action)).to.eql(expectedResponse);
    });






    // it('handles action of type FETCH_ITEM_SUCCESS', () => {
    //     const action = { type: FETCH_ITEM.SUCCESS, payload: { id: 1 } };
    //     const expectedResponse = { ITEM: { id: 1 } };
    //     expect(itemReducer([], action)).to.eql(expectedResponse);
    // });
    //
    // it('handles action of type CREATE_ITEM_SUCCESS', () => {
    //     const action = { type: CREATE_ITEM.SUCCESS };
    //     const expectedResponse = { message: 'Successfully Saved' };
    //     expect(itemReducer([], action)).to.eql(expectedResponse);
    // });
    //
    // it('handles action of type UPDATE_ITEM_SUCCESS', () => {
    //     const action = { type: UPDATE_ITEM.SUCCESS };
    //     const expectedResponse = { message: 'Successfully Saved' };
    //     expect(itemReducer([], action)).to.eql(expectedResponse);
    // });
    //
    // it('handles action of type DELETE_ITEM_SUCCESS', () => {
    //     const action = { type: DELETE_ITEM.SUCCESS };
    //     const expectedResponse = { message: 'Successfully Deleted' };
    //     expect(itemReducer([], action)).to.eql(expectedResponse);
    // });
    //
    // it('handles action of type TOGGLE_ITEM_SUCCESS', () => {
    //     const action = { type: TOGGLE_ITEM.SUCCESS };
    //     const expectedResponse = { message: 'Successfully Change Published Status' };
    //     expect(itemReducer([], action)).to.eql(expectedResponse);
    // });
    //
    //
    // it('handles action of type FETCH_ITEMS_FAILURE', () => {
    //     const action = { type: FETCH_ITEMS.FAILURE, payload: 'error' };
    //     const expectedResponse = { error: 'error' };
    //     expect(itemReducer([], action)).to.eql(expectedResponse);
    // });

});