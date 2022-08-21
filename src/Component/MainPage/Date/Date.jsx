// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


// export default function DatePicker() {
//   const [value, setValue] = React.useState(new Date('2022-08-10T21:11:54'));
//   console.log(value)
//   const handleChange = (newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className='DatePicker'>
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Stack spacing={3} >
//         <DesktopDatePicker
//           label="Date desktop"
//           inputFormat="MM/dd/yyyy"
//           value={props.value}
//           onChange={props.handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </Stack>
//     </LocalizationProvider>
//     </div>
//   );
// }
