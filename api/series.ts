import {SeriesResponse,SeriesPageResponse} from "~/utils/api-response";
import {createPayload, createUrl} from "~/utils/api-utils";

export const getAllSeries = async (): Promise<SeriesPageResponse| null> => {
    const url = '/api/v1/series?page=0&size=1000';
    const {data, pending, error, refresh} = await useFetch<SeriesPageResponse>(
        createUrl(url),
        await createPayload(true)
    )
    if (error.value) {
        return null
    } else {
        return data.value
    }
}

export const getSeries = async (id:number): Promise<SeriesResponse| null> => {
    const url = '/api/v1/series/'+id;
    const {data, pending, error, refresh} = await useFetch<SeriesResponse>(
        createUrl(url)
    )
    if (error.value) {
        return null
    } else {
        return data.value
    }
}