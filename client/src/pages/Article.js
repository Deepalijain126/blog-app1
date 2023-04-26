import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import articles from './articles-content';
import ArticlesData from '../components/ArticlesData';
import CommentsList from '../components/CommentsList';

  import AddCommentForm from '../components/CommentsForm';

const Article = () => {
    const {name} = useParams();
    const article = articles.find((article)=> article.name=== name);

    const [articleInfo,setArticleInfo] = useState({comments:[]});
    useEffect(()=>{
      const fetchData = async ()=>{
        const result = await fetch(`/api/articles/${name}`);
        const body =  await result.json();
        console.log(body);
        setArticleInfo(body);
      }
      fetchData();
    },[name]);

    if(!article) return (<h1>Article doesnot Exist</h1>);

    const otherArticle = articles.filter( article => article.name !==  name)
  return (
    <> 
    <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>{article.title}</h1>
    {
        article.content.map((paragraph,index)=>(
            <p className="mx-auto text-base leading-relaxed mb-4" key={index}>{paragraph}</p>
        )
        )
    }
    <CommentsList comments = {articleInfo.comments}></CommentsList>
    <AddCommentForm  articleName={name} setArticleInfo={setArticleInfo}></AddCommentForm>
    <h1 className='sm:text-2xl text-xl font-bold my-4 text-gray-900'>Other Articles</h1>
    <div className='flex flex-wrap -m-4'>
    <ArticlesData articles={otherArticle}></ArticlesData></div>
    </>
  )
}

export default Article