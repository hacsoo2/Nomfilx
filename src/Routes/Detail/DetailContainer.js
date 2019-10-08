import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
    state = {
        results: null,
        error: null,
        loading: true
    };

    render() {
        const { results, error, loading } = this.state;
        return (
            <DetailPresenter
                results={results}
                error={error}
                loading={loading}
            />
        );
    }
}