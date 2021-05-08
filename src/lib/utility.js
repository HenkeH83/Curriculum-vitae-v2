import { addPages } from '$lib/store'

export function addPageElement(element, page) {
    const pageObj = {
        element: element,
        page: page
    }
    addPages(pageObj)
}