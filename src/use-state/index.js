import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function createArray(totalStars)
{
    return [
        ...Array(totalStars)
    ];
}

function Star({ selected, onSelect })
{
    return (
        <FaStar
            color={selected ? "red" : "grey"}
            onClick={onSelect}

        />
    )
}

function StarRating({ totalStars = 5 })
{
    const [selectedStars, setSelectedStars] = useState(0);

    return (
        createArray(totalStars).map((star, index) =>
        {
            return <Star key={index} selected={selectedStars > index} onSelect={() => setSelectedStars(index + 1)} />
        })
    )
}


export default StarRating;
