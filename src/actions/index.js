/**
 * Created by rozer on 4/8/2018.
 */
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_ALLPOSTS = "FETCH_ALLPOSTS";

export const fetchCategories = categories => ({
    type: FETCH_CATEGORIES,
    categories
});

export const fetchAllPosts = posts => ({
    type: FETCH_ALLPOSTS,
    posts
});
