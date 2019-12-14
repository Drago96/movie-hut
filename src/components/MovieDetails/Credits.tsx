import React, { useMemo } from 'react';
import { groupBy, map, first } from 'lodash';
import { Movie, Person as PersonIcon } from '@material-ui/icons';

import CastPerson from 'types/CastPerson';
import CrewPerson from 'types/CrewPerson';
import { Person } from './PersonTableRow';
import PersonTable from './PersonTable';

type Props = {
  cast: CastPerson[];
  crew: CrewPerson[];
};

const Credits: React.FC<Props> = ({ cast, crew }) => {
  const crewMembersForTable = useMemo(
    () =>
      map(groupBy(crew, 'id'), crewMemberEntries => {
        const allCrewMemberJobs = crewMemberEntries
          .map(position => position.job)
          .join(', ');

        return {
          ...first(crewMemberEntries),
          role: allCrewMemberJobs
        };
      }) as Person[],
    [crew]
  );

  const castMembersForTable = useMemo(
    () =>
      map(cast, castMember => {
        return {
          ...castMember,
          role: castMember.character
        };
      }) as Person[],
    [cast]
  );

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
};

export default Credits;
