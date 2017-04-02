import React from 'react';
import { Panel, Col, Well } from 'react-bootstrap';
// import Timeago from 'react-timeago'
// import PanelHeader from './PanelHeader'
import LinkToProject from './LinkToProject'

export default class ProjectCard  extends React.Component{
  constructor(props) {
    super(props);

    this.state = {open: false};
  }
  pannelHeader = () => {
    return (
      <Well bsSize="small"  style={{fontSize: 14}}>
        <Col xs={14} md={8}>
         <span>{this.props.project.title}</span>
        </Col>
        <Col xs={10} md={4}>
          <span>{this.props.project['percentage.funded']}%</span>
          <span className="paddLeft5" style={{fontSize: 12}}>By: {this.props.project.by}</span>
        </Col>
      </Well>
    )
  }

  render () {
    const {
      url,
      blurb,
      location
    } = this.props.project;
    return (
      <Panel collapsible header={this.pannelHeader()} style={{padding: 10}} eventKey={this.props.project['s.no'] + 1}>
        {blurb}<br />
        <div className="panelFooter">
          <span style={{padding: 0, paddingRight: 40 }}>Backers: {this.props.project['num.backers']}</span>
          <span style={{padding: 0, paddingRight: 40 }}>Location: {location}</span>
          <span style={{padding: 0, paddingRight: 40 }}><LinkToProject url={url} /></span>
        </div>
      </Panel>
    )
  }
}
