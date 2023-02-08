import React from "react";
import axios from "axios";
import {ArticleList} from "./ArticleList";
import {fetchArticlesWithQuery} from "./api/api";


axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export class Article extends React.PureComponent {
    state = {
        articles: [],
        isLoading: false,
        error: null,
        searchQuery: ''
    };

    componentDidMount() {
        this.handleArticlesRequest()
    }

    handleArticlesRequest = async (searchQuery = 'react') => {
        this.setState({ isLoading: true })

        try {
            const articles = await fetchArticlesWithQuery(searchQuery)
            this.setState({ articles });
        } catch (error) {
            this.setState({
                error: error.message
            })
        } finally {
            this.setState({
                isLoading: false
            })
        }
    }

    handleInput = evt => {
        this.setState({
            searchQuery: evt.target.value
        })
    }

    componentDidUpdate(_prevProps, prevState) {
        if(prevState.searchQuery !== this.state.searchQuery && this.state.searchQuery.length > 3) {
            this.handleArticlesRequest(this.state.searchQuery)
        }
    }


    render() {
        const { articles, isLoading, error, searchQuery } = this.state;
        return (
            <div>
                <input type="text" value={searchQuery} onChange={this.handleInput} />
                {isLoading && <div>loading in progress</div>}
                {error && !isLoading && <div>Something went wrong: {error}</div>}
                {!isLoading && articles.length > 0 && <ArticleList articles={articles} />}
            </div>
        );
    }
}



