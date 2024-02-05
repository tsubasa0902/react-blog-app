import React, { useEffect, useState } from 'react'
import './Home.css'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';
const Home = () => {
	const [postList, setPostlist] = useState([]);

	useEffect(()=> {
		const getPosts = async () => {
			const data = await getDocs(collection(db, "posts"));
			setPostlist(data.docs.map((doc)=>({ ...doc.data(), id:doc.id })));
		};
		getPosts();
	},[])

	const handeleDelete = async (id) => {
		await deleteDoc(doc(db,"posts",id));
		window.location.href = "/";
	}
	return (
		<div className="homePage">
			{postList.map((post) => {
				return (
					<div className="postContents" key={post.id}>
						<div className="postHeader">
							<h1>{post.title}</h1>
						</div>
						<div className="postTextContainar">
							{post.postText}
						</div>
						<div className="nameAndDeleteButton">
							<h3>@{post.author.username}</h3>
							{post.author.id === auth.currentUser?.uid && (
								<button onClick={() => handeleDelete(post.id)}>削除</button>
							)}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Home
