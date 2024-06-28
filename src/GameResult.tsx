import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Category, Game } from './Types';
import { GiBookshelf, GiDiceFire, GiHillConquest, GiPartyPopper, GiSpikedDragonHead } from "react-icons/gi";
import { PiLegoFill } from "react-icons/pi";
import { BsPersonFill } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoMdTimer } from "react-icons/io";


interface Props {
  game: Game
}


export const GameResult = ({ game }: Props) => {
  const { name, category, shelf, minPlayers, maxPlayers, maxPlayTime, isExpansion, agePlus, bggLink } = game

  return (
    <Card variant="outlined" sx={{marginTop: '10px'}}>
      <Box sx={{ p: 2, backgroundColor: 'white'}}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom component="div" maxWidth={'75%'}>
            <div className='flex-container'>

              {name}          
              { bggLink && <img src={'/BGG.jpeg'} className="bgg-link" alt="BGG Logo" onClick={() => window.open(bggLink)}/>}
            </div>

          </Typography>


          <Typography gutterBottom component="div" sx={{fontWeight: 'bold'}}>
            <div className='flex-row'>
              {shelf}
              {!!shelf && <GiBookshelf style={{'marginLeft': '3px'}}/> }
            </div>
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2, backgroundColor: '#F1DEAB'}}>
        <div className='flex-container'>
          <Chip label={`${category}`} icon={getCategoryIcon(category)} size="medium" /> 
          <Chip label={`Min: ${minPlayers}`} icon={<BsPersonFill />} size="medium" /> 
          <Chip label={`Max: ${maxPlayers}`} icon={<BsPersonFill />} size="medium" /> 
          <Chip label={`Age: ${agePlus}+`} icon={<LiaBirthdayCakeSolid />} size="medium" />
          <Chip label={`${maxPlayTime} minutes`} icon={<IoMdTimer />} size="medium" /> 
          {isExpansion && <Chip label="Expansion" icon={<PiLegoFill/>}/> }
        </div>
      </Box>
    </Card>
  )
}

function getCategoryIcon(category: Category) {

  if(category === Category.Party){
    return <GiPartyPopper />
  }
  if(category === Category.LightStrategy){
    return <GiSpikedDragonHead />
  }
  if(category === Category.AdventureHeavy){
    return <GiHillConquest />
  }
  if(category === Category.CardAndDice){
    return <GiDiceFire />
  }

  return (<PiLegoFill/>)
}