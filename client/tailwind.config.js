/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({addUtilities}){
      const newUtilities={
        ".scrollbar-thin":{
          scrollbarWidth:"thin",
          scrollbarColor: "rgb(27, 187, 187) rgb(182, 255, 255)"
        },
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar":{
            width: "8px"
          },
          "&::-webkit-scrollbar-track":{
            background: "cyan"
          },
          "&::-webkit-scrollbar-thumb":{
            backgroundColor:"#b6ffff",
            borderRadius: "10px",
            border: "1px solid black"
          }
        }
      }

      addUtilities(newUtilities,["responsive","hover"])
    }
  ],
}

