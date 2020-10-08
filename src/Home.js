import React from "react";
import "./Home.css"; 
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/11/Tesla-Roadster-103.jpg"/>
        
        {/* Product details */}
            <div className="home__row">
            <Product
                id="bmw3"
                status="NEWLY AVAILABLE"
                name="2019 BMW 3 Series"
                miles={62938}
                store="Colma, CA"
                storeDistance={13.0}
                transferFee={234}
                price={41327}
                image="https://cars.usnews.com/static/images/Auto/custom/13871/2019_BMW_3-Series_31.jpg"
            />
            <Product
                id="tesla3"
                status="POPULAR MODEL"
                name="2018 Tesla Model 3"
                miles={19238}
                store="Pleasanton, CA"
                storeDistance={39.0}
                transferFee={702}
                price={33940}
                image="https://i.pinimg.com/originals/58/87/10/588710f1147503aa7aedeb3b4078840f.jpg"
            />
            <Product
                id="cadillac19"
                status="GREAT DEAL"
                name="2019 Cadillac Escalade"
                miles={16039}
                store="Colma, CA"
                storeDistance={13.0}
                transferFee={234}
                price={16039}
                image="https://s3.amazonaws.com/drivechicago/inventory/1GYS4HKJ5KR404034/1GYS4HKJ5KR404034-d.jpg"
            />
            </div>

            <div className="home__row">
            <Product
                id="porsche17"
                status="NEWLY AVAILABLE"
                name="2017 Porsche Panamera"
                miles={20301}
                store="Pleasanton, CA"
                storeDistance={39.0}
                transferFee={702}
                price={57390}
                image="https://cdn.motor1.com/images/mgl/6xG1Z/s1/2017-porsche-panamera-turbo-first-drive.jpg"
            />
            <Product
                id="benz18"
                status="GREAT DEAL"
                name="2018 Mercedes E-Class"
                miles={48304}
                store="Fairfield, CA"
                storeDistance={44.0}
                transferFee={850}
                price={49940}
                image="https://www.bentleygoldcoast.com/galleria_images/7089/7089_p2_l.jpg"
            />
            <Product
                id="teslas"
                status="NEWLY AVAILABLE"
                name="2020 Tesla Model S"
                miles={72239}
                store="San Jose, CA"
                storeDistance={54.0}
                transferFee={550}
                price={69990}
                image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-tesla-model-s-cheetah-101-1597276810.jpg"
            />
            </div>

            <div className="home__row">
            <Product
                id="honda17"
                status="POPULAR MODEL"
                name="2017 Honda Accord"
                miles={62938}
                store="San Jose, CA"
                storeDistance={54.0}
                transferFee={550}
                price={21940}
                image="https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/558/2017-honda-accord-hybrid-napa-valley-california-jul-2016_100558542.jpg"
            />
            <Product
                id="benz19"
                status="NEWLY AVAILABLE"
                name="2019 Mercedes C-Class"
                miles={62938}
                store="Colma, CA"
                storeDistance={13.0}
                transferFee={234}
                price={49940}
                image="https://pictures.dealer.com/m/mercedesbenzofsanjosemb/1934/cfedf6c5307b0a0ce3ad2144a4be78c2x.jpg"
            />
            <Product
                id="rav4"
                status="POPULAR MODEL"
                name="2019 Toyota RAV4"
                miles={42058}
                store="San Jose, CA"
                storeDistance={54.0}
                transferFee={550}
                price={25850}
                image="https://d2y29ce7mse2a.cloudfront.net/uploads/5af4a97db7b8f50176c9b552b3e1e321.jpg"
            />
            </div>
        </div>
    );
}

export default Home;