import { get } from 'svelte/store'
import { addPages, windowY } from '$lib/store'
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

export function scrollInto(page) {
    const scrollOptions = {
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
    };
    page.scrollIntoView(scrollOptions);
}

// export function scrollToElement(page) {
//     const elementRect = page.getBoundingClientRect()
//     const bodyRect = document.body.getBoundingClientRect()
//     const parentRect = page.parentNode.getBoundingClientRect()
//     const parentElement = page.parentElement

//     const scrollOptions = {
//         behavior: 'smooth',
//         top: page.scrollTop,
//         left: 0
//     };
//     console.log(scrollOptions);
//     parentElement.scrollTo(scrollOptions);
// }