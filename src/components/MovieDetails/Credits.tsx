import React, { useMemo } from 'react';
import { groupBy, map, first, pick } from 'lodash';
import { Movie, Person as PersonIcon } from '@material-ui/icons';

import CastPerson from 'types/CastPerson';
import CrewPerson from 'types/CrewPerson';
import { Person } from './PersonTableRow';
import PersonTable from './PersonTable';

type Props = {
  cast: CastPerson[];
  crew: CrewPerson[];
};

function isCastPerson(person: CastPerson | CrewPerson): person is CastPerson {
  return (person as CastPerson).character !== undefined;
}

const personsForTable = (persons: CastPerson[] | CrewPerson[]) =>
  map(groupBy(persons, 'id'), anyPersonEntries => {
    const personEntries = map(
      anyPersonEntries,
      person => person as CastPerson | CrewPerson
    );

    const personRole = personEntries
      .map(person => {
        if (isCastPerson(person)) {
          return person.character;
        }

        return person.job;
      })
      .join(', ');

    const personAttributes = pick(first(personEntries), [
      'id',
      'name',
      'profilePath'
    ]);

    return {
      ...personAttributes,
      role: personRole
    };
  }) as Person[];

const Credits: React.FC<Props> = ({ cast, crew }) => {
  const crewMembersForTable = useMemo(() => personsForTable(crew) as Person[], [
    crew
  ]);

  const castMembersForTable = useMemo(() => personsForTable(cast) as Person[], [
    cast
  ]);

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
