import React from 'react'

export const ArticleList = ({ articles }) => (
    <ul>
        {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
                <a href={url} target="_blank" rel="noreferrer noopener">
                    {title}
                </a>
            </li>
        ))}
    </ul>
);