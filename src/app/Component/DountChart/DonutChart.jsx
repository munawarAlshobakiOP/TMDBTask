import * as DountStyle from './DountChart.style';
export default function DonutChart({
  percentage = 0,
  size = 32,
  textClassName = '',
  ringThickness = 2,
  wrapperClassName = '',
}) {
  return (
    <DountStyle.DonutWrapper
      size={size}
      percentage={percentage}
      className={wrapperClassName}
    >
      <DountStyle.DonutInner size={size} thickness={ringThickness} />
      <DountStyle.PercentageText size={size} className={textClassName}>
        {percentage}
        <sup>%</sup>
      </DountStyle.PercentageText>
    </DountStyle.DonutWrapper>
  );
}
