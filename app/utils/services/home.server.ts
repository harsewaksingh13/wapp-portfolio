import { title } from "process"


export function getHeader() {
    const { title, meta, svg, items } = getHomeContent()
    var headerItems = items.map(({ header_title, header_href, id }) => {
        return { title: header_title, href: header_href, content_id: id }
    })
    headerItems.push({
        title: 'Articles', href: '/articles',
        content_id: ""
    })

    headerItems.push({
        title: 'About', href: '/about',
        content_id: ""
    })
  
    return { title, meta, svg, items: headerItems }
}

export function getHomeContent() {
    const items = [{
        id: '#home',
        title: '',
        header_title: 'Home',
        header_href: '/',
        type: 'hero',
        view_type: 'hero',
        href: '/#home-projects',
        items: [{
            title: 'Bring all your work together',
            description: 'A better experience for your clients and less stress you to explain.',
            image: '',
            href: '/#home-projects',
            button: 'Projects'
        }]
    },
    {
        id: '#home-skills',
        title: 'Skills',
        header_title: 'Skills',
        header_href: '/#home-skills',
        href: '/#home-skills',
        type: 'skills',
        view_type: 'tags',
        items: [
            { title: 'Tyescript' }, { title: 'Java' },
            { title: 'C++' }, { title: 'Swift' },
            { title: 'Kotlin' }, { title: 'Javascript' }, { title: 'Kmm' },
            { title: 'React Native' }, { title: 'Mongodb' }, { title: 'Nodejs' },
            { title: 'android' }, { title: 'iOS' }, { title: 'Html' },
            { title: 'Css' }, { title: 'remix' }, { title: 'swiftui' }, { title: 'compose' },
            { title: 'rxjava' }, { title: 'di' }
        ]
    },
    {
        id: '#home-projects',
        title: 'Projects',
        header_title: 'Projects',
        header_href: '/#home-projects',
        href: '/projects',
        type: 'projects',
        view_type: 'list',
        items: [
            {
                title: 'The portofilio - Techniers',
                description: 'Let the world know who you are',
                image: 'https://source.unsplash.com/random?sig='
            }
        ]
    }]
    const image = '<svg fill="#F7931E" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 324.146 324.146">    <path d="M230.645,324.146H25.365c-4.418,0-8-3.582-8-8V69.811c0-4.418,3.582-8,8-8h205.279c4.418,0,8,3.582,8,8v15.766h20.236c4.418,0,8,3.582,8,8s-3.582,8-8,8h-20.236v20.614h10.01c4.418,0,8,3.582,8,8s-3.582,8-8,8h-10.01v20.615h20.236c4.418,0,8,3.582,8,8s-3.582,8-8,8h-20.236v20.613h10.01c4.418,0,8,3.582,8,8s-3.582,8-8,8h-10.01v104.727C238.645,320.564,235.063,324.146,230.645,324.146z M33.365,308.146h189.279V77.811H33.365V308.146z M166.297,293.237c-20.576,0-37.316-16.739-37.316-37.314s16.74-37.314,37.316-37.314c20.574,0,37.313,16.739,37.313,37.314S186.871,293.237,166.297,293.237z M166.297,234.609c-11.754,0-21.316,9.562-21.316,21.314s9.562,21.314,21.316,21.314c11.752,0,21.313-9.562,21.313-21.314S178.049,234.609,166.297,234.609z M298.781,262.335h-36.605c-4.418,0-8-3.582-8-8s3.582-8,8-8h28.605V16H101.502v25.307c0,4.418-3.582,8-8,8s-8-3.582-8-8V8c0-4.418,3.582-8,8-8h205.278c4.418,0,8,3.582,8,8v246.335C306.781,258.753,303.198,262.335,298.781,262.335z M105.182,235.255H66.215c-4.418,0-8-3.582-8-8s3.582-8,8-8h38.967c4.418,0,8,3.582,8,8S109.6,235.255,105.182,235.255z M189.795,199.842H66.215c-4.418,0-8-3.582-8-8s3.582-8,8-8h123.58c4.418,0,8,3.582,8,8S194.213,199.842,189.795,199.842z M189.795,164.429H66.215c-4.418,0-8-3.582-8-8s3.582-8,8-8h123.58c4.418,0,8,3.582,8,8S194.213,164.429,189.795,164.429z M105.182,129.016H66.215c-4.418,0-8-3.582-8-8s3.582-8,8-8h38.967c4.418,0,8,3.582,8,8S109.6,129.016,105.182,129.016z"/></svg>'
    return { title: 'The portfolio', meta: { title: "The portfolio", description: "Welcome to the portfolio" }, svg: image, items: items }
}