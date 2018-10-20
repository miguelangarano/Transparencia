import {GET_USERS, ADD_USER, DELETE_USER} from '../actions/types';

const initialState={
    user:[
        {id:'123',name:'Miguel'},
        {id:'1234',name:'Manuel'},
        {id:'122',name:'Jose'},
    ]
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_USERS:{
            return{
                ...state
            };
        }

        default:{
            return state;
        }
    }
}