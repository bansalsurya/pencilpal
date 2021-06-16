import reactCSS from "reactcss";

export const styles = reactCSS({
  default: {
  
    righticons: {
      border: "none",
      width: "100%",
      background: "none",
      borderRadius: "0.1%",
      outline: "none",
      padding: "10%",
    },
    topicons: {
      border: "none",
      width: `${window.innerWidth * 0.073}px`,
      height: `${window.innerHeight * 0.1}px`,
      background: "none",
      borderRadius: "0.1%",
      outline: "none",
      padding: "1%",
    },
    picker: {
      border: "none",
      backgroundImage:
        "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)",
      width: `${window.innerWidth * 0.035}px`,
      height: `${window.innerHeight * 0.06}px`,
      padding: "2%",
      borderRadius: "7%",
      outline: "none",
      filter: "blur(0.5px)",
    },
  },
});
