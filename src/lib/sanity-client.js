import sanityClient from '@sanity/client'
import blocksToHtml from '@sanity/block-content-to-html'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '4yza7xah',
    dataset: 'production',
    apiVersion: '2021-03-25',    //'2021-05-12',
    useCdn: false // for now....
})

const h = blocksToHtml.h;
export const serializer = {
    types: {
        code: (props) =>
            h(
                'pre',
                { className: props.node.language },
                h('code', props.node.code)
            ),
    }
}

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}