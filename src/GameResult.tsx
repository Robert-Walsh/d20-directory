import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Game } from './Types';

interface Props {
  game: Game
}


export const GameResult = ({ game }: Props) => {

  const { name, category, shelf, minPlayers, maxPlayers, maxPlayTime, isExpansion, agePlus } = game


  return (
    <Card variant="outlined" sx={{marginTop: '10px'}}>
      <Box sx={{ p: 2, backgroundColor: 'white'}}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom component="div" maxWidth={'75%'}>
            {name}
          </Typography>
          <Typography gutterBottom component="div" sx={{fontWeight: 'bold'}}>
            {shelf}
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2, backgroundColor: '#F1DEAB'}}>
        <div className='flex-container'>
          <Chip label={`${category}`} size="medium" /> 
          <Chip label={`Min: ${minPlayers}`} size="medium" /> 
          <Chip label={`Max: ${maxPlayers}`} size="medium" /> 
          <Chip label={`Age: ${agePlus}+`} size="medium" />
          <Chip label={`Time: ${maxPlayTime} minutes`} size="medium" /> 
        </div>
      </Box>
    </Card>
  )
}