import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Job Data
function createData(
  id: number,
  time: string,
  name: string,
  nameSpace: string,
  duration: string,
  completions: string,
) {
  return { id, time, name, nameSpace, duration, completions };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'job-a',
    'default',
    "9s",
    "1/1",
  ),
  createData(
    1,
    '16 Mar, 2019',
    'job-a',
    'default',
    "9s",
    "1/1",
  ),
  createData(2,
    '16 Mar, 2019',
    'job-a',
    'default',
    "9s",
    "1/1"
  ),
  createData(
    3,
    '16 Mar, 2019',
    'job-a',
    'default',
    "9s",
    "1/1",
  ),
  createData(
    4,
    '16 Mar, 2019',
    'job-a',
    'default',
    "9s",
    "1/1",
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Jobs() {
  return (
    <React.Fragment>
      <Title>Recent Jobs</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>NameSpace</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell align="right">Completion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.nameSpace}</TableCell>
              <TableCell>{row.duration}</TableCell>
              <TableCell align="right">{`$${row.completions}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more jobs
      </Link>
    </React.Fragment>
  );
}