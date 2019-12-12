import React, { memo } from 'react';
import { groupBy, map, first } from 'lodash';
import { Movie, Person as PersonIcon } from '@material-ui/icons';

import CastPerson from 'types/CastPerson';
import CrewPerson from 'types/CrewPerson';
import PersonTable, { Person } from './PersonTable';

type Props = {
  cast: [CastPerson];
  crew: [CrewPerson];
};

const Credits: React.FC<Props> = memo(({ cast, crew }) => {
  const crewMembersForTable = map(groupBy(crew, 'id'), crewMemberEntries => {
    const allCrewMemberJobs = crewMemberEntries
      .map(position => position.job)
      .join(', ');

    return {
      ...first(crewMemberEntries),
      role: allCrewMemberJobs
    };
  }) as [Person];

  const castMembersForTable = map(cast, castMember => {
    return {
      ...castMember,
      role: castMember.character
    };
  }) as any;

  return (
    <>
      <PersonTable
        tableHeading="Crew"
        tableIcon={Movie}
        roleColumnName="Job"
        persons={crewMembersForTable}
      />
      <PersonTable
        tableHeading="Cast"
        tableIcon={PersonIcon}
        roleColumnName="Character"
        persons={castMembersForTable}
      />
    </>
  );
});

export default Credits;
