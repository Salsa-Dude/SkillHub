import React, { Component, Fragment } from 'react'
import { Divider, Grid, Image, GridColumn } from 'semantic-ui-react'
import "../styles/explore.css"

class ExploreContainer extends Component {
  render(){

    const exploreGrid = {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "20px"
    }

    return (
     <Fragment>
       <Divider />
       <div className="explore-container">
        <Grid>
          <Grid.Column style={exploreGrid} width={13}>
            <h2>Explore categories and skills</h2>
            <div className="explore-categories">
              <div class="wrapper">
                <div class="box a">Dancing</div>
                <div class="box b">Languages</div>
                <div class="box c">Carpentry</div>
                <div class="box d">Musical</div>
                <div class="box e">Art</div>
              </div>
            </div>
          </Grid.Column>
        </Grid> 
        <div className="space"></div>
          fjeoiwfhofeh
       </div>
       
     </Fragment>
    )
  }
}

export default ExploreContainer;