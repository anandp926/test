/**
 * Created by rozer on 4/8/2018.
 */
import { combineReducers } from 'redux'
import { FETCH_CATEGORIES, FETCH_ALLPOSTS} from '../actions'

function fetchAllPosts(state = {}, action) {
    switch (action.type){
        case FETCH_ALLPOSTS:
            return action.posts;
        default:
            return state
    }
}

function fetchCategories(state = {}, action) {
    switch (action.type){
        case FETCH_CATEGORIES:
            return action.categories;
        default:
            return state
    }
}

export default combineReducers({fetchCategories, fetchAllPosts })
