import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import axiosInstance from '../axios';
import Skeleton from '../components/Skeleton';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // Fetch data
        setLoading(true);
        axiosInstance
            .get()
            .then((response) => {
                setPosts(response.data.data.children);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);
    return (
        <>
            <Header />
            <div className='mx-5 sm:mx-10 md:mx-12 ' >
                <div className='my-3'>
                    {loading ? Array(4).fill().map((_, index) => <Skeleton key={index} />)
                        :
                        posts.length ? posts.map((item, index) => {
                            return (<>
                                <Card key={item.data.title} title={item.data.title} url={item.data.url} score={item.data.score} selfTextHtml={item.data.selftext_html} />

                            </>)
                        }) : <div>
                            <h1>Items not found</h1>
                        </div>}
                </div>

            </div>
        </>
    )
}

export default Home