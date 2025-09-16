import styled from 'styled-components';

export const DonutWrapper = styled.div`
  width: ${({ size }) => `${size / 16}rem`};
  height: ${({ size }) => `${size / 16}rem`};
  border-radius: 50%;
  background: ${({ percentage }) => {
    const angle = (percentage / 100) * 360;

    const ringColor =
      percentage >= 70
        ? 'var(--color-success)'
        : percentage >= 40
          ? 'var(--color-warning)'
          : 'var(--color-error)';

    return `conic-gradient(${ringColor} ${angle}deg, rgba(255, 255, 255, 0.3) 0deg)`;
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 0 0 0.25rem var(--color-border-dark);
`;

export const DonutInner = styled.div`
  width: ${({ size, thickness }) => `${(size - thickness * 2) / 16}rem`};
  height: ${({ size, thickness }) => `${(size - thickness * 2) / 16}rem`};
  background-color: var(--color-border-dark);
  border-radius: 50%;
  position: absolute;
  border: 0.1875rem solid var(--color-border-dark);
`;

export const PercentageText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.75rem;
  color: var(--color-white);
  font-weight: bold;
  border-radius: var(--radius-sm);
  padding: 0.125rem 0.25rem;
  min-width: 1.5rem;
  text-align: center;
  line-height: 1;

  &.detail-page-donut-text {
    font-size: 1.45rem !important;
  }

  sup {
    font-size: 0.5rem;
    vertical-align: super;
    line-height: 0;
  }

  &.detail-page-donut-text sup {
    font-size: 0.7rem;
  }
`;
