import React, {Fragment} from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'

import '../styles/topicHeader.css'


const TopicHeader = (props) => {

  const topicHeaderBackground = {
    backgroundImage: `linear-gradient(rgba(100, 99, 99, 0.7), rgba(100, 99, 99, 0.7)), url(${props.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const exploreGrid = {
  
    marginLeft: "10%",
    marginTop: "20px",
    border: 'solid'
  }

  return (
    <Fragment>
      <div style={topicHeaderBackground} className="topic-header-container">
        <Grid>
          <Grid.Column style={exploreGrid} width={8}>
            <h1>{props.title}</h1>
          </Grid.Column>
        </Grid>
      </div>
    </Fragment>
  )
}

export default TopicHeader