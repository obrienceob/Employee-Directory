import React, { Componenet } from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import SearchBar from './Searchbar';
import EmployeeCard from './EmployeeCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from '../../utils/API';
import './Directory.css';

export default class Directory extends Componenet {
    state = {
        search: '',
        results: [],
        filteredResults: [],
    };

    //populate page with employee data when this component mounts
    componentDidMount() {
		API.populateEmployees()
			.then((res) => this.setState({ results: res.data.results, filteredResults: res.data.results }))
			.catch((err) => console.log(err));
	}

    handleInputChange = (event) => {
        const value = event.target.value;
        const resultsArr = this.state.results;
        //Filter the list to populate the new FilteredResults Arr with new names from the API that match inputs
        const searchEmployeeList = resultsArr.filter((eName) => eName.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1 || eName.last.toLowerCase().indexOf(value.toLowerCase()) !== -1);
        this.setState({
            filteredResults: searchEmployeeList,
        });
    };

    handleOrderByAgeAsc = (e) => {
        e.preventDefault();
        //order age by ascending order
        const unsortedArr = this.state.filteredResults;
        const sortedArray = unsortedArr.sort(function (a, b) {
            return b.dob.age - a.dob.age;
        });
        this.setState({
            filteredResults: sortedArray,
        });
    };

    handleOrderByAgeDesc = (e) => {
        e.preventDefault();
        //order age by descending order
        const unsortedArr = this.state.filteredResults;
        const sortedArray = unsortedArr.sort(function (a, b) {
            return a.dob.age - b.dob.age;
        });
        this.setState({
            filteredResults: sortedArray,
        });
    };

    render () {
        return (
            <div className="Search-Result-Container">
                <SearchBar handleInputChange={this.handleInputChange} searchEmployee={this.searchEmployee} handleOrderByAgeDesc={this.handleOrderByAgeDesc} handleOrderByAgeAsc={this.handleOrderByAgeAsc} />
                <CardDeck>
                    <Container className="Card-Container" fluid>
                        <EmployeeCard filteredResults={this.state.filteredResults} />;
                    </Container>
                </CardDeck>
            </div>
        );
    };
}