import './animatedSVG.css'; 

export function ArrowDown(props) {
    return (
        // <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
        //     <g transform="rotate(-90 12 12)">
        //         <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
        //             <path strokeDasharray={20} strokeDashoffset={20} d="M21 12H3.5">
        //                 <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.45s" values="20;0" />
        //             </path>
        //             <path strokeDasharray={12} strokeDashoffset={12} d="M3 12L10 19M3 12L10 5">
        //                 <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.45s" dur="0.3s" values="12;0" />
        //             </path>
        //         </g>
        //     </g>
        // </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
            <g transform="rotate(-90 12 12)">
                <g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                    <path strokeDasharray={20} strokeDashoffset={20} d="M21 12H3.5">
                        <animate attributeName="stroke-dashoffset" dur="1.6s" values="0;0" repeatCount="indefinite" />
                    </path>
                    <path strokeDasharray={12} strokeDashoffset={12} d="M3 12L10 19M3 12L10 5">
                        <animate attributeName="stroke-dashoffset" dur="2s" values="12;0" repeatCount="indefinite" begin="0.45s" />
                    </path>
                </g>
            </g>
        </svg>
        
    );
}