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
import { FaChess, FaHandPaper, FaHandsHelping, FaMask, FaQuestion, FaUserFriends } from "react-icons/fa";
import { GiThink } from "react-icons/gi";
import { MdChildCare } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { RiBeerLine } from "react-icons/ri";


interface Props {
  game: Game
}


export const GameResult = ({ game }: Props) => {
  const { name, category, shelf, minPlayers, maxPlayers, maxPlayTime, isExpansion, agePlus, bggLink } = game

  return (
    <Card variant="outlined" sx={{margin: '10px 8px'}}>
      <Box sx={{ p: 2, backgroundColor: 'white', backgroundImage: 'url(./background-icons.png)', backgroundRepeat: 'repeat', backgroundPosition: 'center'}}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom component="div" maxWidth={'75%'}>
            <div className='flex-container'>

              <div style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '1px'}}>
                {name}  
              </div>        
              { bggLink && <img src={'/BGG.jpeg'} className="bgg-link" alt="BGG Logo" onClick={() => window.open(bggLink)}/>}
            </div>

          </Typography>


          <Typography gutterBottom component="div" sx={{fontWeight: 'bold'}}>
            <div className='flex-row'>
              {shelf}
              {!!shelf && <GiBookshelf style={{'marginLeft': '3px', marginTop: '0px', width: '25px', height: '25px'}}/> }
            </div>
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2, backgroundColor: '#F1DEAB', backgroundImage: 'url(./brick.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
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


  switch (category) {
    case Category.Party:
      return <GiPartyPopper />;
    case Category.LightStrategy:
      return <GiSpikedDragonHead />;
    case Category.CoOp:
      return <FaHandsHelping />;
    case Category.AdventureHeavy:
      return <GiHillConquest />;
    case Category.TwoPlayer:
      return <FaUserFriends />;
    case Category.Strategy:
      return <GiThink />;
    case Category.FamilyAndKids:
      return <MdChildCare />;
    case Category.ThreePlayer:
      return <PiUsersThree />;
    case Category.CardAndDice:
      return <GiDiceFire />;
    case Category.Trivia:
      return <FaQuestion />;
    case Category.Over18:
      return <RiBeerLine />;
    case Category.Classic:
      return <FaChess />;
    case Category.Dexterity:
      return <FaHandPaper />;
    case Category.SocialDeduction:
      return <FaMask />;
    default:
      return <PiLegoFill />;
  }

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
  if(category === Category.Classic){

  }

}