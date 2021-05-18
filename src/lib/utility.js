import { addPages } from '$lib/store'
import { serializer } from '$lib/sanity-client';
import blocksToHtml from '@sanity/block-content-to-html';

export function addPageElement(element, pageName) {
    const pageObj = {
        element: element,
        page: pageName
    }
    addPages(pageObj)
}

export function toHtml(content) {
    return blocksToHtml({
        blocks: content.body,
        serializers: serializer
    })
}