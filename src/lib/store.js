import { writable, readable } from 'svelte/store'

let pagesObj = new Object()
export const addPages = (pageObj) => {
    pagesObj[pageObj.page] = pageObj
    pages.set(pagesObj)
}

export const pages = writable(null)