import React from 'react'

export const metadata = {
    title: "Quotes",
}

const Quotes = async () => {

    let quotes = await fetch('https://dummyjson.com/quotes', {
        cache : 'no-cache'
    });
    quotes = await quotes.json();
    console.log(quotes)

    return (
        <div>
            <h1 className=" text-[40px] font-bold underline text-green-600 text-center">Quotes</h1>
            <div className=" grid grid-cols-3 mx-auto container gap-3 max-sm:grid-cols-1 max-md:grid-cols-2 ">
                {
                    quotes.quotes.map((quote) => (
                        <div key={quote.id} className=" border-2 border-green-700 rounded p-3">
                            <h1 className=" font-serif space-y-2"><span className=" font-semibold font-serif text-[20px] text-green-600">Title:</span> <br />{quote.quote}</h1>
                            <h1 className=" mt-4 font-serif"><span className=" font-semibold">Author: </span> {quote.author}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Quotes;
