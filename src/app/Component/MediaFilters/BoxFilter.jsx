'use client';
import { ChevronRight_Icon } from '../../assests/icons';
import * as Styles from './MediaFilter.style';

export default function H1Section({
  sectionId,
  title,
  expandedSections,
  toggleSection,
}) {
  return (
    <Styles.H1Section onClick={() => toggleSection(sectionId)}>
      <h1>
        {title}{' '}
        <Styles.Expand isExpanded={expandedSections[sectionId]}>
          <ChevronRight_Icon />
        </Styles.Expand>
      </h1>
    </Styles.H1Section>
  );
}
