import React from "react";
import {Header} from "../components/Header/Header";
import MainText from "../components/MainText/MainText";
import {useLocation, useParams} from "react-router-dom";
import SearchResult from "../components/SearchResult/SearchResult";
import SearchBar from "../components/SeachBar/SearchBar";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
export default function  SearchPage() {
    const query = useQuery();
    const { name, page } = useParams<{ name: string; page: string }>();
    return (
        <>
            <Header/>
            <MainText/>
            <SearchBar/>
            <div className="Main">
            <SearchResult name={name} /></div>
        </>
    )

}