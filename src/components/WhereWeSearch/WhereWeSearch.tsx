import React, {useEffect, useState} from "react";
import { useGetMarketplaceQuery } from "../../api/marketplaceAPI";
import classes from "./WhereWeSearch.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WhereWeSearch() {
    const { data, isLoading, error } = useGetMarketplaceQuery();
    const [displayText, setDisplayText] = useState("ГДЕ МЫ ИЩЕМ? НА ТОПОВЫХ МАРКЕТПЛЕЙСАХ");

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setDisplayText("МАРКЕТПЛЕЙСЫ");
            } else {
                setDisplayText("ГДЕ МЫ ИЩЕМ? НА ТОПОВЫХ МАРКЕТПЛЕЙСАХ");
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;


    // Check if data exists before mapping over it
    if (!data || !Array.isArray(data)) return null;

    return (
        <div className={classes.PopularNow}>
            <h1 className={classes.Text}>
                {displayText}
            </h1>
            <div className={classes.container}>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index}>
                        <img width="80%" height="100px"  src={item.icon} />
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    );
}
