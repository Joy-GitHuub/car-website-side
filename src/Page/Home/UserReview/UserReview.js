import React, { useEffect, useState } from 'react';
import UserReviewCard from '../UserReviewCard/UserReviewCard'

const UserReview = () => {

    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        const url = `https://intense-cove-94957.herokuapp.com/userReview`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUserReviews(data))
    }, [])

    console.log(userReviews)
    return (
        <div className='text-center mb-5 container'>

            <h3 className='find-out mt-5'>Our User Reviews <br />---------------------------</h3>
            <div className='row row-cols-1 row-cols-md-4 my-5 g-4 container'>
                {
                    userReviews.map(userReview => <UserReviewCard key={userReview._id} userReview={userReview}></UserReviewCard>)
                }
            </div>





        </div>
    );
};

export default UserReview;