import styled from 'styled-components';

const DonutWrapper = styled.div`
  width: ${({ size }) => `${size / 16}rem`};
  height: ${({ size }) => `${size / 16}rem`};
  border-radius: 50%;
  background: ${({ percentage }) => {
    const angle = (percentage / 100) * 360;
    const ringColor =
      percentage >= 70 ? '#21d07a' :
      percentage >= 40 ? '#d2d531' :
      '#db2360';
    return `conic-gradient(${ringColor} ${angle}deg, #e0e0e0 0deg)`;
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const DonutInner = styled.div`
  width: ${({ size, thickness }) => `${(size - thickness * 2) / 16}rem`};
  height: ${({ size, thickness }) => `${(size - thickness * 2) / 16}rem`};
  background-color: #081c22;
  border-radius: 50%;
  position: absolute;
`;

const PercentageText = styled.span`
  position: absolute;
  font-size: 0.625rem; 
  color: white;
  font-weight: bold;
`;

export default function DonutChart({ percentage = 0, size = 34 }) {
  const ringThickness = 2;

  return (
    <DonutWrapper size={size} percentage={percentage}>
      <DonutInner size={size} thickness={ringThickness} />
      <PercentageText>{percentage}%</PercentageText>
    </DonutWrapper>
  );
}
