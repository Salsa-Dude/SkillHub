import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import {fetchingCourses} from '../redux/actions'

import CourseCard from '../components/CourseCard'
import { Divider, Grid, Image, GridColumn } from 'semantic-ui-react'
import "../styles/explore.css"

class ExploreContainer extends Component {

  componentDidMount() {
    this.props.fetchingCourses()
  }

  render(){
    
    const exploreGrid = {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "20px"
    }

    const CategoriesGrid = {
      marginLeft: "auto",
      marginRight: "auto",
    }

    var settings = {
      dots: false,
      slidesToShow: 5,
      arrows: true
    };

    const DancingLink = {
      gridColumn: '1',
      gridRow: '1 / 3'
    }

    return (
     <Fragment>
       <Divider />
       <div className="explore-container">
        <Grid>
          <Grid.Column style={exploreGrid} width={14}>
            <h2>Explore categories and skills</h2>
            <div className="explore-categories">
              <div class="wrapper">
                <Link style={DancingLink} to="/dancing"><div class="box a">Dancing</div></Link>
                <div class="box b">Languages</div>
                <div class="box c">Carpentry</div>
                <div class="box d">Musical</div>
                <div class="box e">Art</div>
              </div>
            </div>
          </Grid.Column>
        </Grid> 
        <div className="space"></div>
        <Grid>
          <Grid.Column style={CategoriesGrid} width={14}>
            <div className="allCategoriesContainer">
              <h2>Featured courses</h2>
              <div className="featuredCourses">
                <Slider {...settings}>
                {this.props.courses.map(course => {
                    return <div><CourseCard course={course} key={course.id} /></div> 
                  })}
                </Slider>
              </div>
            </div>
          </Grid.Column>
        </Grid>
       </div>
       
     </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { courses: state.courses };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingCourses: () => {dispatch(fetchingCourses())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);