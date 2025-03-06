module.export = {
    mode:'jit',
    content: ["./.html"],
    theme: {
      extend: {
        screen:{
          sm:"480px",
          md:"768px",
          lg:"967px",
          xl:"1440px",
        },
        colors:{
          brightRed:"#ff6347",
          brightRedLight:"#f6866a",
          brightRedSupLight:"#fdece7",
          darkBlue:"#242d52",
          darkGrayishBlue:"#9095a7",
          veryDarkBlue:"#1d1e25",
          veryPaleRed:"#ffefeb",
          veryLightGray:"#fafafa"
        }
      },
    },
    plugins: [],
  }