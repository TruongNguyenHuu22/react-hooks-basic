import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PostList from "./PostList";
import queryString from "query-string";
import PostFilterForm from "./PostFilterForm";

const PostFeature = () => {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
        title_like: "",
    });

    const handlePageChange = (newPage) => {
        setFilters({
            ...filters,
            _page: newPage,
        });
    };

    useEffect(() => {
        async function fetchPostList() {
            const paramString = queryString.stringify(filters);
            try {
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                const { data, pagination } = responseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log("Failed to Post list", error.message);
            }
        }
        fetchPostList();
    }, [filters]);

    const handleFiltersChange = (newFilters) => {
        setFilters({ ...filters, _page: 1, title_like: newFilters.searchTerm });
    };

    return (
        <>
            <h3>UseEffect - Post List</h3>
            <PostFilterForm onSubmit={handleFiltersChange} />
            <PostList posts={postList} />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default PostFeature;
