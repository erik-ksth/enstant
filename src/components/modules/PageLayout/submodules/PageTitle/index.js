import React from "react";
import '../../../../../index.css'

function PageTitle(props) {
    return (
        <>
            <div class="w-screen p-10 flex flex-col justify-center">
                <div>
                    <h1><span>{props.pageName}</span></h1>
                </div>
                <p class="text-center font-lexendPetaLight text-base tracking-tighter">{props.description}</p>
            </div>
        </>
    )
}

export default PageTitle