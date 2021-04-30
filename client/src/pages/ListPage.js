import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/Loader";
import {List} from "../components/List";

export const ListPage = () => {
    const [links, setLinks] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchLinks = useCallback(async () =>{
        try{
            const fetched = await request('/api/grass', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLinks(fetched)
        } catch (e) {}
    },[token,request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading){
        return <Loader/>
    }


    return(
        <>
            {!loading && <List links={links}/>}
        </>
    )
}