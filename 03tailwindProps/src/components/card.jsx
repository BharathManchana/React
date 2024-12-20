import React from "react";

const Card = (props) => {//In React, component names 'Card' must start with a capital letter to follow conventions and to 
    //ensure React treats them as components, not as native HTML elements.
  // Correct placement of console.log before the JSX return
  console.log("Props", props);
  
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"
        alt="Sarah Dayan"
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            {props.user}
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
