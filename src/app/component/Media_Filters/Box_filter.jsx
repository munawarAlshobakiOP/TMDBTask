'use client';
import { ChevronRight_Icon } from '../../assests/icons';
import * as Styles from './Media_Filter.styled';

export default function H1Section({ sectionId, title, expandedSections, toggleSection }) {
  return (
    <Styles.H1Section onClick={() => toggleSection(sectionId)}>
      <h1>
        {title}{" "}
        <Styles.Expand
          style={{
            transform: expandedSections[sectionId] ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          <ChevronRight_Icon />
        </Styles.Expand>
      </h1>
    </Styles.H1Section>
  );
}
