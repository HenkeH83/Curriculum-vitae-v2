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

export const nodePositions = ['top', 'middle', 'bottom']

export function getNodePosition(theArray, theIndex) {
    if (theIndex === 0) return nodePositions[0];
    if ((theArray.length - 1) === theIndex) return nodePositions[2];
    return nodePositions[1];
}