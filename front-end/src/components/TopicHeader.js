import React, {Fragment} from 'react'
import { NavLink} from 'react-router-dom'
import { Grid, GridColumn, Breadcrumb } from 'semantic-ui-react'



import '../styles/topicHeader.css'


const TopicHeader = (props) => {

  const topicHeaderBackground = {
    backgroundImage: `linear-gradient(rgba(100, 99, 99, 0.5), rgba(100, 99, 99, 0.5)), url(${props.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const exploreGrid = {
    marginLeft: "10%",
    marginTop: "20px",
  }

  const breadCrumb = {
    color: 'white'
  }

  return (
    <Fragment>
      <div style={topicHeaderBackground} className="topic-header-container">
        <Grid>
          <Grid.Column style={exploreGrid} width={8}>
          <Breadcrumb size='big'>
            <Breadcrumb.Section style={breadCrumb} as={NavLink} to="/explore" >Explore</Breadcrumb.Section>
            <Breadcrumb.Divider style={breadCrumb} icon='right chevron' />
            <Breadcrumb.Section active>{props.title}</Breadcrumb.Section>
          </Breadcrumb>
            <h1>{props.title}</h1>
          </Grid.Column>
        </Grid>
      </div>
    </Fragment>
  )
}

export default TopicHeader