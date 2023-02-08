import React from 'react'

// const NewsArticles = () => ()
// const GamingArticles = () => ()
// const BasicArticles = () => ()

const ArticleType = {
    BASIC: 'BASIC',
    NEWS: 'NEWS',
    GAMING: 'GAMING'
}

const ComponentMap = {
    [ArticleType.BASIC]: BasicArticles,
    [ArticleType.NEWS]: NewsArticles,
    [ArticleType.GAMING]: GamingArticles
}

export class Articles extends React.PureComponent {
    render() {
        const ArticleCompoonent = ComponentMap[this.props.articles.type]


        return <ArticleCompoonent articles={this.props.articles} />
    }
}

// articles {
//     item: [],
//     type: NEWS | GAMING | BASIC
// }