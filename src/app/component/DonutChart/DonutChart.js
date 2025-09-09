
export default function DonutChart({ percentage = 0, size = 34 }) {
  const ringThickness = 2; 
  const angle = (percentage / 100) * 360;
  const ringcolor = percentage >= 70 ? '#21d07a' : percentage >= 40 ? '#d2d531' : '#db2360';
  return (

    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: `conic-gradient(${ringcolor} ${angle}deg, #e0e0e0 0deg)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: `${size - ringThickness * 2}px`,
          height: `${size - ringThickness * 2}px`,
          backgroundColor: "#081c22", 
          borderRadius: "50%",
          position: "absolute",
        }}
      ></div>

      <span
        style={{
          position: "absolute",
          fontSize: "10px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {percentage}%
      </span>
    </div>
  );
}
