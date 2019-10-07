import React, { Component } from 'react';
import moment from 'moment';

export class GitHub extends Component {
    static displayName = GitHub.name;

    constructor(props) {
        super(props);

        this.state = {
            repos: [],
            loading: true
        };
    }

    componentDidMount() {
        this.populateRepos();
    }

    static renderReposTable(repos) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Created At</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Watchers</th>
                    </tr>
                </thead>

                <tbody>
                    {repos.map(repo =>
                        <tr key={repo.id}>
                            <td>{moment(repo.created_at).format("MM/DD/YYYY")}</td>
                            <td>{repo.name}</td>
                            <td>{repo.description}</td>
                            <td>{repo.watchers_count}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : GitHub.renderReposTable(this.state.repos);

        return (
            <div>
                <h1 id="tabelLabel" >dotnet Repos</h1>
                <p>This component demonstrates fetching data from an api call.</p>
                {contents}
            </div>
        );
    }

    async populateRepos() {
        const response = await fetch('https://api.github.com/orgs/dotnet/repos');
        const data = await response.json();
        this.setState({
            repos: data,
            loading: false
        });
    }
}
