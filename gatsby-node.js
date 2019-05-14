/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const slugify = require('slugify')
const path = require('path')
const slash = require('slash')
const now = new Date().toISOString().substring(0, 10)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const eventsTemplate = path.resolve(`./src/templates/events.js`)
    const newsTemplate = path.resolve(`./src/templates/news.js`)
    const pageTemplate = path.resolve(`./src/templates/page.js`)
    const singleAreaTemplate = path.resolve(`./src/templates/areaSingle.js`)
    const singleEventTemplate = path.resolve(`./src/templates/eventSingle.js`)
    const singleNewsTemplate = path.resolve(`./src/templates/newsSingle.js`)

    const templates = {
        event: eventsTemplate,
        news: newsTemplate,
        page: pageTemplate,
        singleArea: singleAreaTemplate,
        singleEvent: singleEventTemplate,
        singleNews: singleNewsTemplate
    }

    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const result = await graphql(`
        {
            allWordpressWpApiMenusMenusItems {
                edges {
                    node {
                        items {
                            wordpress_id
                            order
                            title
                            description
                            object_id
                            object
                            object_slug
                        }
                    }
                }
            }
        }
    `)

    // Check for any errors
    if (result.errors) {
        throw new Error(result.errors)
    }

    const edges = result.data.allWordpressWpApiMenusMenusItems.edges
    // Combine all menu items and remove custom links because they are external links
    const menuItems = edges.map(edge => edge.node.items).reduce((pre, current) => pre.concat(current)).filter(item => item.object !== 'custom')

    /* Create all menu item pages */
    menuItems.forEach(item => {
        createPage({
            path: slugify(item.title, { lower: true }),
            component: slash(templates[item.object]),
            context: {
                id: item.object_id,
                slug: item.object,
                now: now,
            },
        })
    })

    /* Create all Area pages */
    const areaResult = await graphql(`
        {
            allWordpressWpArea {
                edges {
                    node {
                        wordpress_id
                        slug
                        name
                    }
                }
            }
        }
    `)
    // Check for any errors
    if (areaResult.errors) {
        throw new Error(areaResult.errors)
    }
    const areas = areaResult.data.allWordpressWpArea.edges
    areas.forEach(edge => {
        const { node: item } = edge
        createPage({
            path: item.slug,
            component: slash(templates.singleArea),
            context: {
                id: item.wordpress_id,
                slug: item.slug
            },
        })
    })


    /* Create all event pages */
    const eventResult = await graphql(`
        {
            allWordpressWpEvent {
                edges {
                    node {
                        wordpress_id
                        slug
                        path
                        title
                        type
                    }
                }
            }
        }
    `)
    // Check for any errors
    if (eventResult.errors) {
        throw new Error(eventResult.errors)
    }
    const events = eventResult.data.allWordpressWpEvent.edges
    events.forEach(edge => {
        const { node: item } = edge
        console.log("path", `${item.type}/${item.slug}`)
        createPage({
            path: item.path,
            component: slash(templates.singleEvent),
            context: {
                id: item.wordpress_id,
                slug: item.slug
            },
        })
    })



    /* Create all news pages */
    const newsResult = await graphql(`
        {
            allWordpressWpNews {
                edges {
                    node {
                        wordpress_id
                        slug
                        path
                        title
                        type
                    }
                }
            }
        }
    `)
    // Check for any errors
    if (newsResult.errors) {
        throw new Error(newsResult.errors)
    }
    const news = newsResult.data.allWordpressWpNews.edges
    news.forEach(edge => {
        const { node: item } = edge
        console.log("path", `${item.type}/${item.slug}`)
        createPage({
            path: item.path,
            component: slash(templates.singleNews),
            context: {
                id: item.wordpress_id,
                slug: item.slug
            },
        })
    })
    

}

// Pass Date to page context, used in graphql queries for events
// https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#pass-context-to-pages
exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions

    deletePage(page)
    createPage({
        ...page,
        context: {
            ...page.context,
            now: now,
        },
    })
}
