import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Link} from 'react-router-dom'
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
    
    var settings = {
      dots: false,
      slidesToShow: 5,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };


    return (
     <Fragment>
       <Divider />
       <div className="explore-container">
        <Grid>
          <Grid.Column className="explore-grid" width={14}>
            <h2>Explore categories and skills</h2>
            <div className="explore-categories">
              <div class="wrapper">
                <Link className="dancing-link explore-link" to="/dancing"><div class="box a">Dancing</div></Link>
                <Link className="explore-link" to="/languages"><div class="box b">Languages</div></Link>
                <Link className="explore-link" to="/carpentry"><div class="box c">Carpentry</div></Link>
                <Link className="explore-link" to="/musical"><div class="box d">Musical</div></Link>
                <Link className="explore-link" to="/art"><div class="box e">Art</div></Link>
              </div>
            </div>
          </Grid.Column>
        </Grid> 
        {/* <div className="space"></div> */}
        <Grid className="categories-main-container">
          <Grid.Column className="categories-grid" width={14}>
            <div className="allCategoriesContainer">
              <h2>Featured courses</h2>
              <div className="featuredCourses">
                <Slider {...settings} className="settings">
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