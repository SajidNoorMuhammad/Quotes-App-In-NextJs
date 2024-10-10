import React from 'react'

export const metadata = {
    title: "Quotes",
}

const Quotes = async () => {

    let quotes = await fetch('https://dummyjson.com/quotes');
    quotes = await quotes.json();
    console.log(quotes)

    return (
        <div>
        </div>
    )
}

export default Quotes;
