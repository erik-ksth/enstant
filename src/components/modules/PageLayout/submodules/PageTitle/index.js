import React from "react";
import '../../../../../index.css'

function PageTitle(props) {
    return (
        <>
            <div class="w-screen p-10 flex flex-col justify-center">
                <div class="relative h-24">
                    <h1 class="absolute inset-0 top-3 z-10"><span>{props.pageName}</span></h1>
                    {/* <h1 className="shadowText">{props.pageName}</h1> */}
                </div>
                <p class="text-center font-lexendPetaLight text-base tracking-tighter">{props.description}</p>
            </div>
        </>
    )
}

export default PageTitle