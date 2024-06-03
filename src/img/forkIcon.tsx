import React from "react";

export const ForkIcon = ({
    height = "32px",
    width = "32px",
    color = "#005580",
    secondaryColor,
    ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
    <svg className="w-6 h-6 text-darkBlue dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={ secondaryColor || color } viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12v4m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
    </svg>

)