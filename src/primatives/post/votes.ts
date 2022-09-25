import * as Errors from "../../errors";
import request from "../request";
import { ApiData, DefaultApi, DefaultApiData} from "../interface";
import type { Post } from "../../types";



export async function add_upvote(
        id: number,
        { apiUrl = DefaultApi, token = null }: ApiData = DefaultApiData,
    ) {
    let r = await request(apiUrl, "POST", `/post/${id}/upvote/add`, {
        responseCodeErrors: {
            404:Errors.PostNotFound,
        }
    })
    return await r.json();
}


export async function remove_upvote(
        id: number,
        { apiUrl = DefaultApi, token = null }: ApiData = DefaultApiData,
    ) {
    let r = await request(apiUrl, "POST", `/post/${id}/upvote/remove`, {
        responseCodeErrors: {
            404:Errors.PostNotFound,
        }
    })
    return await r.json();
}


export async function add_downvote(
        id: number,
        { apiUrl = DefaultApi, token = null }: ApiData = DefaultApiData,
    ) {
    let r = await request(apiUrl, "POST", `/post/${id}/downvote/add`, {
        responseCodeErrors: {
            404:Errors.PostNotFound,
        }
    })
    return await r.json();
}


export async function remove_downvote(
        id: number,
        { apiUrl = DefaultApi, token = null }: ApiData = DefaultApiData,
    ) {
    let r = await request(apiUrl, "POST", `/post/${id}/downvote/remove`, {
        responseCodeErrors: {
            404:Errors.PostNotFound,
        }
    })
    return await r.json();
}
