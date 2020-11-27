import React from 'react'
import Banner from './Banner'
import './Home.css'
import Card from './Card'

function Home() {
    return (
        <div className = 'home'>
            <Banner/>
            <div className='home__section'>
                <Card
                src="https://i.pinimg.com/564x/6c/62/d0/6c62d0e11bd07097ba2c72fe0a589826.jpg"
                title="Kalle's Inn Glasshouses"
                // description="If dramatic views of the sky, the sea and the surrounding snowscape is your thing this holiday season, then Kalle’s Inn gives you all this and more"
                price="Rs.700"/>
                <Card
                src="https://i.pinimg.com/564x/6e/f0/b1/6ef0b168f328b14fca59042b638a44e4.jpg"
                title="The Love Hut"
                // description="Hosted by Robyn, this shepherd's hut is located in the centre of Bath and has a private hot tub. In 2020, travelers have been taking the minimalist approach when it comes to planning their getaways."
                price="Rs.250"/>
                <Card
                src="https://i.pinimg.com/564x/31/06/b1/3106b159671f460203d63e658d1ea3a7.jpg"
                title="Rustikales Blockhaus"
                // description="Those at home are dreaming of being surrounded by nature with cabins being the fastest growing in wish list inclusions at more than 20% growth week-over-week."
                price="Rs.1050"/>
              
            </div>
            <div className='home__section'>
                <Card
                 src="https://i.pinimg.com/564x/cb/9a/6b/cb9a6b1339602388bbefde6a8833be33.jpg"
                 title="Santa Catarina Home"
                //  description="This Brazilian home was wish listed over 275,000 times on Airbnb in 2019. Guests love this beachfront home in Santa Catarina for the luxurious linens and special amenities"
                 price="Rs.1520"/>
                <Card
                 src="https://i.pinimg.com/564x/6a/c3/37/6ac337225c4e9a90c9bcebc9f612bf94.jpg"
                 title="Lion King Lodge"
                //  description="It's no Lion Kingdom but it's close. Fans will appreciate this Parisian lodge inspired by the '90s film."
                 price="Rs.880"/>
                <Card
                 src="https://i.pinimg.com/564x/56/c5/2e/56c52e8e1645af2b0fba5e24079dbfd3.jpg"
                 title="Bishops Palace in Lake"
                //  description="Spend an unforgettable holiday in the beautiful, history filled city of Ballarat, a leisurely one-hour drive from Melbourne. You will be staying in the heart of Ballarat in your own beautifull"
                 price="Rs10200"/>
            </div>
        </div>
    )
}

export default Home
