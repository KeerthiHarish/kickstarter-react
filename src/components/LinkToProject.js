import React from 'react';

export default class ProjectCard  extends React.Component{
  constructor(props) {
    super(props);

    this.state = {open: false};
  }

  render () {
    let url = this.props.url;
    return (
      <a href={`https://www.kickstarter.com${url}`} target="_blank">View Project</a>
    )
  }
}
