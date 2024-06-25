import React, {useEffect, useState} from 'react'
import axios from 'axios';

export const Gallery = () => {
    const [name,setName]=useState("");
    const [about,setAbout]=useState("");
    const [imageUrl,setImageUrl]=useState("");

    const [datas,setDatas]=useState([]);

    const[id,setid]=useState(null);

    useEffect(()=>{
        const handleread=()=>{     //handleread is a function
            axios
                .get("http://localhost:3001/users")
                .then((res)=>{
                    setDatas(res.data);
                })
                .catch(()=>{console.log("error occurring")})
        }
        handleread();
    },[]);


    const handlepost=()=>{
        axios
            .post("http://localhost:3001/users",{name,about,imageUrl})
            .then(()=>{
                alert("Data saved successfully");
                setName("");
                setAbout("");
                setImageUrl("");
            })
            .catch((e)=>(console.log(`error:${e}`)))
    }

    const handleEdit=(userid)=>{
        setid(userid.id);
        setName(userid.name);
        setAbout(userid.about);
        setImageUrl(userid.imageUrl);
    }

    const handleupdate=()=>{
        axios
            .put(`http://localhost:3001/users/${id}`,{name,about,imageUrl})
            .then(()=>{
                alert("data updated successfully");
            })
            .catch(()=>{alert("data not updated")})
    }

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3001/users/${id}`)
        .then(()=>{
            alert(`data deleted succesufully`)
        })
        .catch((error)=>{ alert(`Error: ${error}`) }) 
    }


    // const handleread=()=>{
    //     axios
    //         .get("http://localhost:3001/users")
    //         .then((res)=>{
    //             setDatas(res.data);
    //         })
    //         .catch(()=>{console.log("error occurring")})
    // }

  return (
    <div>
        <center>
        <form onSubmit={id?handleupdate:handlepost}>
        NAME:
        <input type='text' value={name}  onChange={(e)=>{setName(e.target.value)}} />
        ABOUT:
        <input type='text' value={about} onChange={(e)=>{setAbout(e.target.value)}} />
        URL:
        <input type='text' value={imageUrl}  onChange={(e)=>{setImageUrl(e.target.value)}} />
        <br></br>
        <button>{id?"UPDATE":"POST"}</button>
        
        {/* <button onClick={handleread}>READ</button> */}
        
        </form>

        {/* to display the data from get */}
        <ul>
                {datas.map((i) => (
                    <li key={i.id}>
                        <strong>Name:</strong> {i.name}<br />
                        <strong>About:</strong> {i.about}<br />
                        <strong>Image:</strong> <img src={i.imageUrl} alt="not found" width="100" /><br />
                        <button onClick={()=>{handleEdit(i)}}>Edit</button>
                        <button onClick={()=>handleDelete(i.id)}>Delete</button>
                    </li>
                ))}
        </ul>

        </center>
    </div>
  )
}
export default Gallery
