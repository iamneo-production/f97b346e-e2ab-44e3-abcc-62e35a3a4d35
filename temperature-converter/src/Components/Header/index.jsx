import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { allposts } from "../../Api";
function Index(){
    const [posts,setPosts] = React.useState([]);
    const navigate = useNavigate();
    const handleposts= async()=>{
        let allPosts =   await allposts()
        setPosts(allPosts)
       
    }


React.useEffect(()=>{
    if(posts.length > 0){
        navigate('/api/conversion-info', {state:posts})
    }
},[posts, navigate])
    
    return <div className="container mb-3">
    <div className="row">
        <div className="col-md-3 col-sm-6 mb-2">
            <button className="btn btn-primary w-100 btn_danger_color" onClick={handleposts}>
                Conversion-info
            </button>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
            <Link className="btn btn-primary w-100 btn_danger_color" to="/api/celsius-to-fahrenheit">
                Celsius-to-fahrenheit
            </Link>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
            <Link className="btn btn-primary w-100 btn_danger_color" to="/api/fahrenheit-to-celsius">
            Fahrenheit-to-celsius
            </Link>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
            <Link className="btn btn-primary w-100 btn_danger_color" to="/api/convert-batch">
            Convert-batch
            </Link>
        </div>
    </div>
</div>
}

export default Index;