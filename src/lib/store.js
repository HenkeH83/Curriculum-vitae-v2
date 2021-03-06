import { writable, readable } from 'svelte/store'

let pagesObj = new Object()
export const addPages = (pageObj) => {
    pagesObj[pageObj.page] = pageObj
    pages.set(pagesObj)
}

export const pages = writable(null)

export const windowWidth = writable(null)
export const windowHeight = writable(null)
export const windowY = writable(null)