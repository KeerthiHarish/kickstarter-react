import React, { Component } from 'react';
import sort from './sort.png';
import './App.css';
import {GetData} from './utils/GetData'
import { PanelGroup, Col, Row } from 'react-bootstrap';
import ProjectCard from './components/ProjectCard'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterProjects: [],
      isAscName: false,
      isAscPer: false
    };
  }

  componentWillMount () {
    GetData().then((projects) => {
      this.setState({projects: projects, filterProjects: projects});
    })
  }

  filterProjects = (e) => {
    let filterText = e.target.value;
    let filterProjects = []
    this.state.projects.map((item) => item.title.toLowerCase().includes(filterText.toLowerCase()) && filterProjects.push(item));
    this.setState({filterProjects});
  }

  sortProjectsByName = () => {
    this.state.isAscName ? (
      this.state.projects.sort(function(a,b) {return (a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0);} )
    ): (
      this.state.projects.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);} )
    )
    this.setState({
      filterProjects: this.state.projects,
      isAscName: !this.state.isAscName
    })
  }

  sortProjectsByPercentage = () => {
    this.state.isAscPer ? (
      this.state.projects.sort((a,b) => parseInt(a['percentage.funded'], 10) - parseInt(b['percentage.funded'], 10))
    ): (
      this.state.projects.sort((a,b) => parseInt(b['percentage.funded'], 10) - parseInt(a['percentage.funded'], 10))
    )
    this.setState({
      filterProjects: this.state.projects,
      isAscPer: !this.state.isAscPer
    })
  }

  render() {
    return (
      <Col md={12}>
        <Col md={2} />
        <Col md={8}>
          <Row className="App-header">
            <Col md={4}>
              <h3>KickStart projects</h3>
            </Col>
            <Col md={3} className="inputFields">
              <input type="text" onChange={this.filterProjects} placeholder="Search by title" />
            </Col>
            <Col md={5} className="inputFields">
              Percentage: <img src={sort} height="30" width="30" onClick={this.sortProjectsByPercentage} alt="Percentage funded"/>
              Title: <img src={sort} height="30" width="30" onClick={this.sortProjectsByName} alt="Title"/>
            </Col>
          </Row>
          <PanelGroup accordion role="tablist">
            {this.state.filterProjects.map((project, index) => {
              return <ProjectCard key={index} project={project} />
            })}
          </PanelGroup>
        </Col>
        <Col md={2} />
      </Col>
    );
  }
}

export default App;
