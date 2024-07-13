import React from "react";

export default function Mut_cards(){
    return <>
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="w-full h-48 object-cover object-center" src="https://source.unsplash.com/random/800x600" alt="Random Image"> </img>
    <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Fancy Card Title</h2>
        <p className="text-gray-600 mt-2">This is a description of the fancy card. It can be used to provide more information about the content or purpose of the card.</p>
        <div className="mt-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-900 font-semibold">Read More</a>
        </div>
    </div>
</div>

    </>
}