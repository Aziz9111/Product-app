import React, {Component} from "react";
import Title from "./Title";
import Photowall from "./PhotoWall";
import Photo from "./Photo";
import AddPhoto from "./AddPhoto";
import {Route, Link} from 'react-router-dom';
import { removePost } from "../redux/actions"; 
import Single from "./Single";

/*const posts = [{
    id: "0",
    description: "beautiful landscape",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    "3919321_1443393332_n.jpg"
    }, {
    id: "1",
    description: "Aliens???",
    imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    }, {
    id: "2",
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]*/
   
//state managment, so we can add, update, remove posts
class Main extends Component{ 

    state = { loading: true} 

    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false})
        })
        this.props.startLoadingComments()
    }

     /* constructor() {
        super()
        this.state = {
            posts: [{
                id: 0,
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
                }, {
                id: 1,
                description: "Aliens???",
                imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
                }, {
                id: "2",
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                }],
                //screen: 'photos' //photos, addPhotos
        } */
        /*this.removePhoto = this.removePhoto.bind(this);
        this.navigate = this.navigate.bind(this);
    }*/


  /*   removePhoto(postRemoved) {
        //console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }


    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat(postSubmitted)
        }))
    } */
    /*navigate() {
        this.setState({
            screen: 'addPhoto'
        })
    }*/

    /*componentDidMount() {
        const data = SimulateFetchFromDatabase()
        this.setState({
            posts: data
        })
        //console.log('componentDidMount')
    }*/

    render() {
        //console.log('render')
      return (   
      <div>
        <Route exact path = '/' render = {() => (
        // this.state.screen === 'photos' && (
                    <div>
                       <h1>
                            <Link to = '/'> Photowall</Link>
                       </h1>
                        <Photowall {...this.props} />  {/*posts = props.post , remove = props.remove........*/}
                        {/* <Photowall posts = {this.state.posts} onRemovedPhoto = {this.removePhoto} onNavigate = {this.navigate}/>  */}
                    </div> 
                    //)
        )}/>
        {
           
        }

        {
            //this.state.screen === 'addPhoto' && (
          //<Route path = '/AddPhoto' Component = {AddPhoto}/> //Simpler than:
         <Route path = "/AddPhoto" render = {({history}) => (
                    <AddPhoto {...this.props} onHistory = {history}/>
        )}/> }   
            
        <Route path = '/single/:id' render = {(params)=> (
            <Single loading ={this.state.loading} {...this.props} {...params}/> //history = params.history
        )}/>
            {/* ) */}   
        

                </div>
                )
    }
  }//for {this.state.posts} it was just {posts} before using the state

  /*function SimulateFetchFromDatabase() {
    return [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
        }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
  }*/


  export default Main