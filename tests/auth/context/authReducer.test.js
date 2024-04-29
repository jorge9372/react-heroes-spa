import { authReducer } from '../../../src/auth/';
import { types } from '../../../src/auth/';

describe('authReducer tests', () => {
    const initialState = {
        logged: false,
        user: {
            id: 'abc',
            name: 'Jorge',
        },
    };

    test('should return inicial state', () => {
        const newState = authReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('should call login and set user', () => {
        const user = {
            id: 'testID',
            name: 'usertest',
        };

        const action = {
            type: types.login,
            payload: user,
        };

        const newState = authReducer(initialState, action);

        expect(newState.user).toEqual(user);
        expect(newState.logged).toBeTruthy();
    });

    test('should call logout and remove user', () => {
        

        const action = {
            type: types.logout,
        
        };

        const newState = authReducer(initialState, action);

       
        expect(newState.logged).toBe(false);
        expect(newState.logged).toBeFalsy();
        
        expect(newState.user).toBeUndefined();
    });
});
