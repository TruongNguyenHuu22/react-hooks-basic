import React, { useEffect, useState } from "react";
import PostList from "./PostList";

const PostFeature = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        async function fetchPostList() {
            try {
                const requestUrl =
                    "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                const { data } = responseJSON;
                setPostList(data);
            } catch (error) {
                console.log("Failed to Post list", error.message);
            }
        }
        fetchPostList();
    }, []);

    return (
        <>
            <h3>UseEffect - Post List</h3>
            <PostList posts={postList} />
        </>
    );
};

export default PostFeature;
